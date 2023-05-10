import { apiHandler, roundRepo } from 'helpers/api';

export default apiHandler({
    get: getAll
});

async function getAll(req, res) {
    const rounds = await roundRepo.getAll();
    return res.status(200).json(rounds);
}
