import { apiHandler, usersRepo } from 'helpers/api';

export default apiHandler({
    post: resetPassword
});

async function resetPassword(req, res) {
    await usersRepo.forgotPassword(req.body);
    return res.status(200).json({});
}
