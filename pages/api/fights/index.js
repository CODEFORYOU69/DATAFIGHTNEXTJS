import { apiHandler, fightRepo } from 'helpers/api';

export default apiHandler({
    get: getAll
});

async function getAll(req, res) {
    const users = await fightRepo.getAll();
    return res.status(200).json(users);
}



