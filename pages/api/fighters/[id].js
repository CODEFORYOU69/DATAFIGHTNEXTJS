import { apiHandler, fightersRepo } from 'helpers/api';

const mongoose = require('mongoose');
export default apiHandler({
    get: getById,
    put: update,
    delete: _delete
});

async function getById(req, res) {
console.log("🚀 ~ file: [id].js:11 ~ getById ~ req:", req.query.id)

    //convert id to mongoose object id

     const id = new mongoose.Types.ObjectId(req.query.id);
    console.log("🚀 ~ file: [id].js:15 ~ getById ~ id", id)
    try {

    const fighter = await fightersRepo.getById(id);
    console.log("🚀 ~ file: [id].js:15 ~ getById ~ fighter:", fighter)

    if (!fighter) throw 'Fighter Not Found';

    return res.status(200).json(fighter);
    } catch (error) {
        console.log("🚀 ~ file: [id].js:15 ~ getById ~ error", error)
        return res.status(404).json({ message: error });
    }
}

async function update(req, res) {
    await fightersRepo.update(req.query.id, req.body);
    return res.status(200).json({});
}

async function _delete(req, res) {
    await fightersRepo.delete(req.query.id);
    return res.status(200).json({});
}
