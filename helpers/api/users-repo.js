import getConfig from 'next/config'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { db } from 'helpers/api'


const { serverRuntimeConfig } = getConfig()
const User = db.User

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
        // create a jwt token that is valid for 1 hour store it in the db and send an email with link for reset password

    const token = jwt.sign({ sub: user.id }, process.env.SECRET, {
        expiresIn: '1h',
    })

    user.resetPasswordToken = token
    user.resetPasswordExpires = Date.now() + 3600000 // 1 hour

    await user.save()

    // send an email with mailjet to reset password with a link to the reset password page
    const mailjetConnection = Mailjet.apiConnect(
        process.env.MAILJET_API_KEY,
        process.env.MAILJET_API_SECRET
    );
    

    const request = mailjetConnection.post('send', { version: 'v3.1' }).request({
        Messages: [
            {
                From: {
                    Email: 'younes-ouasmi_student2022@wilder.school',

            
                },
                To: [
                    {
                        Email: email
                    }
                ],
                Subject: 'Reset your password',
                TextPart: `Hello ${user.firstName} ${user.lastName},\n\nYou are receiving this email because you (or someone else) have requested the reset of the password for your account.\n\nPlease click on the following link, or paste this into your browser to complete the process:\n\n${serverRuntimeConfig.clientUrl}/reset-password?token=${token}\n\nIf you did not request this, please ignore this email and your password will remain unchanged.\n`
            }
        ]
    })
    request
        .then(result => {
            console.log(result.body)
        })
        .catch(err => {
            console.log(err.statusCode)
        })


    return {
        ...user.toJSON(),
        token,
    }
}

async function resetPassword({ token, password }) {
     // check if token is valid

     const user = await User.findOne({
        resetPasswordToken: token,
        resetPasswordExpires: { $gt: Date.now() },
    })

    if (!user) { throw 'the token is invalid or has expired' }

    // hash password
    if (password) {
        user.hash = bcrypt.hashSync(password, 10)
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
