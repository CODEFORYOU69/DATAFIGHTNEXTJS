import { apiHandler, fightersRepo } from 'helpers/api';

export default apiHandler({
    get: getAllFighter
});

async function getAllFighter(req, res) {
    const fighters = await fightersRepo.getAll();
    return res.status(200).json(fighters);
}
