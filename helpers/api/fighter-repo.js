import { db } from "helpers/api";
const path = require('path');


const Fighter = db.Fighter;

export const fightersRepo = {
  getAll,
  getById,
  createFighter,
  update,
  delete: _delete,
};

export { updateFighterPhoto };

async function getAll() {
  return await Fighter.find();
}

async function getById(id) {
  return await Fighter.findById(id);
}

async function createFighter(params) {
  const fighter = new Fighter(params);
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
      " " +
      params.birthDate +
      '" is already exist'
    );
  }

  // save fighter
  await fighter.save();
}

async function update(id, params) {
  const fighter = await Fighter.findById(id);

  // validate
  if (!fighter) throw "Fighter not found";
  if (
    fighter.lastName !== params.lastName &&
    (await Fighter.findOne({ lastName: params.lastName })) &&
    fighter.birthDate !== params.birthDate &&
    (await Fighter.findOne({ birthDate: params.birthDate }))
  ) {
    throw (
      'Fighter "' +
      params.lastName +
      " " +
      params.birthDate +
      '" is already exist'
    );
  }

  // copy params properties to user
  Object.assign(fighter, params);

  await fighter.save();
}

async function _delete(id) {
  await Fighter.findByIdAndRemove(id);
}

async function updateFighterPhoto(fighterId, imagePath) {
  console.log("fighterId:updateFighterPhoto", fighterId)
  console.log("imagePath:updateFighterPhoto", imagePath)
  const fighter = await Fighter.findById(fighterId);
  console.log("fighter:updateFighterPhoto", fighter)

  if (!fighter) throw "Fighter not found";

  // Mettez à jour le chemin d'accès à la photo du combattant
  fighter.photo = "/uploads/" + path.basename(imagePath);
  
  console.log("fighter.photo:", fighter.photo)

  await fighter.save();
}
