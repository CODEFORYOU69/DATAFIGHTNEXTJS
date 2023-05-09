import { apiHandler, fightRepo } from 'helpers/api';

export default apiHandler({
    post: createFight
});

async function createFight(req, res) {
    await fightRepo.createFight(req.body);
    return res.status(200).json({});
}
