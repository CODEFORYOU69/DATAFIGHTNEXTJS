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
  const fighter = new Fighter(params)
  // validate lastnames firstname and birthdate must be unique in the same fighter
  if (
    fighter.lastName !== params.lastName &&
    (await Fighter.findOne({ lastName: params.lastName })) &&
    fighter.birthDate !== params.birthDate &&
    (await Fighter.findOne({ birthDate: params.birthDate }))
  ) {
    throw (
      'Fighter "' +
      params.lastName +
      ' ' +
      params.birthDate +
      '" is already exist'
    )
  }

  // save fighter
  await fighter.save()
}

async function update(id, params) {
  const fighter = await Fighter.findById(id)

  // validate
  if (!fighter) throw 'Fighter not found'
  if (
    fighter.lastName !== params.lastName &&
    (await Fighter.findOne({ lastName: params.lastName })) &&
    fighter.birthDate !== params.birthDate &&
    (await Fighter.findOne({ birthDate: params.birthDate }))
  ) {
    throw (
      'Fighter "' +
      params.lastName +
      ' ' +
      params.birthDate +
      '" is already exist'
    )
  }

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

async function fightersFilter(filters) {

  const query = {}

  if (filters.firstName) {
    query.firstName = filters.firstName;
  }

  if (filters.lastName) {
    query.lastName = filters.lastName;
  }

  if (filters.sex) {
    query.sex = filters.sex;
  }

  if (filters.category) {
    query.category = filters.category;
  }

  if (filters.weightCategory) {
    query.weightCategory = parseInt(filters.weightCategory)
  }

  if (filters.country) {
    query.country = filters.country;
  }

  console.log('query', query)

  const result = await Fighter.find(query);

  return result;
}
