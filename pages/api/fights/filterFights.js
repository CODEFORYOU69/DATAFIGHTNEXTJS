import { apiHandler, fightRepo } from 'helpers/api';

export default apiHandler({
    get: filterFights,
});

async function filterFights(req, res) {
    const filters = req.query; // Récupère les paramètres de l'URL
    const fights = await fightRepo.filterFights(filters);
    return res.status(200).json(fights);
}