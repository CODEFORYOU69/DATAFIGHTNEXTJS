import { db } from 'helpers/api'
const path = require('path')

const Fighter = db.Fighter

export const fightersRepo = {
  getAll,
  getById,
  createFighter,
  update,
  delete: _delete,
  fightersFilter,
}

export { updateFighterPhoto }

async function getAll() {
  return await Fighter.find()
}

async function getById(id) {
  return await Fighter.findById(id)
}

async function createFighter(params) {
  
  // validate lastnames firstname and birthdate must be unique in the same fighter
  const existingFighter = await Fighter.findOne({ 
    lastName: params.lastName, 
    birthDate: params.birthDate 
});

if (existingFighter ) {
  throw `Fighter "  ${params.firstName} ${params.lastName} ${params.birthDate}" already exists`;

 }
const fighter = new Fighter(params)

  // save fighter
  await fighter.save()
}

async function update(id, params) {
  const fighter = await Fighter.findById(id)

  // validate
  if (!fighter) throw 'Fighter not found'

  // copy params properties to user
  Object.assign(fighter, params)

  await fighter.save()
}

async function _delete(id) {
  await Fighter.findByIdAndRemove(id)
}

async function updateFighterPhoto(fighterId, imagePath) {

  const fighter = await Fighter.findById(fighterId)

  if (!fighter) throw 'Fighter not found'

  // Mettez à jour le chemin d'accès à la photo du combattant
  fighter.photo = '/uploads/' + path.basename(imagePath)

  await fighter.save()
}


async function fightersFilter(params) {
  const db = await connectToDatabase();
  const collection = db.collection('fighters');
  
  const query = buildFilterQuery(params);
  const result = await collection.find(query).toArray();
  
  return result;
}

