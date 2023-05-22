import { apiHandler, fightersRepo } from 'helpers/api';

const mongoose = require('mongoose');
export default apiHandler({
    get: getById,
    put: update,
    delete: _delete
});

async function getById(req, res) {
    req.query.id = new mongoose.Types.ObjectId(req.query.id);

    const fighter = await fightersRepo.getById(req.query.id);

    if (!fighter) throw 'Fighter Not Found';

    return res.status(200).json(fighter);
}

async function update(req, res) {
    await fightersRepo.update(req.query.id, req.body);
    return res.status(200).json({});
}

async function _delete(req, res) {
    await fightersRepo.delete(req.query.id);
    return res.status(200).json({});
}
