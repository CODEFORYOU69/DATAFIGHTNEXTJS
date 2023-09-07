import { expressjwt } from 'express-jwt';
import util from 'util';

require('dotenv').config();

export { jwtMiddleware };

function jwtMiddleware(req, res) {
    

    const middleware = expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }).unless({
        path: [
            // public routes that don't require authentication
            '/api/users/register',
            '/api/users/authenticate',
            '/api/users/forgotPassword',
            '/api/users/resetPassword'
        ]
    });


    return util.promisify(middleware)(req, res);
}