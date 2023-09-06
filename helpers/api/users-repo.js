import getConfig from 'next/config'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { db } from 'helpers/api'


const { serverRuntimeConfig } = getConfig()
const User = db.User

const SibApiV3Sdk = require('sib-api-v3-sdk');
const defaultClient = SibApiV3Sdk.ApiClient.instance;

const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

const Mailjet = require('node-mailjet');


export const usersRepo = {
    authenticate,
    forgotPassword,
    resetPassword,
    isAdmin,
    getAll,
    getById,
    create,
    update,
    delete: _delete,
}

async function authenticate({ email, password }) {
    const user = await User.findOne({ email })

    if (!(user && bcrypt.compareSync(password, user.hash))) {
        throw 'email or password incorrect'
    }

    // create a jwt token with id and role 
    const token = jwt.sign({ sub: user.id, role: user.role }, process.env.SECRET, {
        expiresIn: '7d',
    });
    
    // remove hash from user object
    
    if (user) {
        delete user.hash;
    }
    

    return {
        ...user.toJSON(),
        token,
    }
}

async function forgotPassword({ email }) {


    const user = await User.findOne({ email })

    if (!user) { throw 'if this email is registered you will receive an email' }

    

    const token = jwt.sign({ sub: user.id }, process.env.SECRET, {
        expiresIn: '1h',
    })

    user.resetPasswordToken = token
    user.resetPasswordExpires = Date.now() + 3600000 // 1 hour

    await user.save()

    // send an email with mailjet to reset password with a link to the reset password page
    const sendSmtpEmail = {
        to: [{
          email: email,
          name: `${user.firstName} ${user.lastName}`
        }],
        subject: 'Reset your password',
        htmlContent: `Hello ${user.firstName} ${user.lastName},<br><br>You are receiving this email because you (or someone else) have requested the reset of the password for your account.<br><br>Please click on the following link, or paste this into your browser to complete the process:<br><br><a href="${process.env.CLIENT_URL}/account/resetpassword?token=${token}">Reset Password</a><br><br>If you did not request this, please ignore this email and your password will remain unchanged.<br>`,
        sender: {
          email: 'y.ouasmi@gmail.com',
          name: 'Dark Vador'
        }
      };
      
      apiInstance.sendTransacEmail(sendSmtpEmail).then(() => {
        console.log('Email sent');
      }).catch((error) => {
        console.error(error);
      });

    return {
        ...user.toJSON(),
        token,
    }
}

async function resetPassword({ token, new_password }) {
     // check if token is valid

     const user = await User.findOne({
        resetPasswordToken: token,
        resetPasswordExpires: { $gt: Date.now() },
    })

    if (!user) { throw 'the token is invalid or has expired' }

    // hash password
    if (new_password) {
        user.hash = bcrypt.hashSync(new_password, 10)
    }

    // reset token and expiration date
    user.resetPasswordToken = null
    user.resetPasswordExpires = null

    await user.save()

    return {
        ...user.toJSON(),
    }


}

async function isAdmin({ id}) {

     const user = await User.getById({ id })

        if (!user) { throw 'user not found' }

        if (user.role !== 'admin') { throw 'user is not an admin' }

        return {
            isAdmin: true


        }


}


async function getAll() {
    return await User.find()
}

async function getById(id) {
    return await User.findById(id)
}

async function create(params) {
    // validate
    if (await User.findOne({ email: params.email })) {
        throw 'email "' + params.email + '" is already taken'
    }

    const user = new User(params)

    // hash password
    if (params.password) {
        user.hash = bcrypt.hashSync(params.password, 10)
    }

    // save user
    await user.save()
}

async function update(id, params) {
    const user = await User.findById(id)

    // validate
    if (!user) throw 'User not found'
    if (
        user.email !== params.email &&
        (await User.findOne({ email: params.email }))
    ) {
        throw 'email "' + params.email + '" is already taken'
    }

    // hash password if it was entered
    if (params.password) {
        params.hash = bcrypt.hashSync(params.password, 10)
    }

    // copy params properties to user
    Object.assign(user, params)

    await user.save()
}

async function _delete(id) {
    await User.findByIdAndRemove(id)
}
