import { apiHandler, roundRepo } from 'helpers/api';

export default apiHandler({
    get: getById,
    put: update,
    delete: _delete
});

async function getById(req, res) {
    const user = await roundRepo.getById(req.query.id);

    if (!user) throw 'round Not Found';

    return res.status(200).json(user);
}

async function update(req, res) {
    await roundRepo.update(req.query.id, req.body);
    return res.status(200).json({});
}

async function _delete(req, res) {
    await roundRepo.delete(req.query.id);
    return res.status(200).json({});
}
