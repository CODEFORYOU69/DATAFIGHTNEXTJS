import { apiHandler, roundRepo } from 'helpers/api';

export default apiHandler({
    post: createRound
});

async function createRound(req, res) {
    console.log('ok1')
    await roundRepo.createRound(req.body);
    return res.status(200).json({});
}
