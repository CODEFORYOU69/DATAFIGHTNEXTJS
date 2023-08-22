import { apiHandler, fighterRepo } from 'helpers/api';

export default apiHandler({
    get: fightersFilters,
});

async function fightersFilters(req, res) {
    const filters = req.query; // Récupère les paramètres de l'URL
console.log("filters", filters);
    const fighters = await fighterRepo.fightersFilter(filters);
    console.log("fighters", fighters);
    return res.status(200).json(fighters);
}