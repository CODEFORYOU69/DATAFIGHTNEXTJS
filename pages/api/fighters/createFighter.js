import { apiHandler, fightersRepo } from 'helpers/api';

export default apiHandler({
    post: createFighter
});

async function createFighter(req, res) {
    await fightersRepo.createFighter(req.body);
    return res.status(200).json({});
}
