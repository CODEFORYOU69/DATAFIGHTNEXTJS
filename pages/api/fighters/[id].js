import { apiHandler, fightersRepo } from 'helpers/api';

const mongoose = require('mongoose')
export default apiHandler({
    get: getById,
    put: update,
    delete: _delete
});

async function getById(req, res) {
    const id = req.query.id;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid ID' });
    }
  
    try {
      const objectId = new mongoose.Types.ObjectId(id);
      const fighter = await fightersRepo.getById(objectId);
  
      if (!fighter) throw 'Fighter Not Found';
  
      return res.status(200).json(fighter);
    } catch (error) {
      return res.status(404).json({ message: error });
    }
  }
  
async function update(req, res) {
    await fightersRepo.update(req.query.id, req.body)
    return res.status(200).json({})
}

async function _delete(req, res) {
    await fightersRepo.delete(req.query.id)
    return res.status(200).json({})
}
