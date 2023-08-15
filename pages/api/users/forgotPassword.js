import { apiHandler, usersRepo } from 'helpers/api';

export default apiHandler({
    post: forgotPassword
});

async function forgotPassword(req, res) {
    await usersRepo.forgotPassword(req.body);
    return res.status(200).json({});
}
