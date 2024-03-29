import { apiHandler, fightRepo } from 'helpers/api';
import { ObjectId } from 'mongodb';
import { object } from 'prop-types';


export default apiHandler({
    get: getById,
    put: update,
    delete: _delete
    
});

async function getById(req, res) {
    const user = await fightRepo.getById(req.query.id);

    if (!user) throw 'User Not Found';

    return res.status(200).json(user);
}

async function update(req, res) {
    await fightRepo.update(req.query.id, req.body);
    return res.status(200).json({});
}

async function _delete(req, res) {
    await fightRepo.delete(req.query.id);
    return res.status(200).json({});
}




