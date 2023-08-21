import { apiHandler, usersRepo } from 'helpers/api';

export default apiHandler({
    post: forgotPassword,
    post: resetPassword,
    
});

async function forgotPassword(req, res) {
    await usersRepo.forgotPassword(req.body);
    return res.status(200).json({});
}

async function resetPassword(req, res) {
    await usersRepo.resetPassword(req.body);
    return res.status(200).json({});
}