import { db } from 'helpers/api'


const Fight = db.Fight
const Fighter = db.Fighter

export const fightRepo = {
    getAll,
    getById,
    createFight,
    update,
    delete: _delete,
}

// get all fights and populate fighter1 and fighter2
async function getAll() {
    return await Fight.find().populate('fighter1_id').populate('fighter2_id').populate('winner_id')
}

async function getById(id) {
    return await Fight.findById(id)
}

// create fight with body params
async function createFight(params) {
    console.log('ok2')
    const fight = new Fight({
        eventyear: params.eventyear,
        eventtype: params.eventtype,
        eventname: params.eventname,
        category: params.category,
        weightcat: params.weightcat,
        fighter1_id: params.fighter1_id,
        fighter2_id: params.fighter2_id,
        rounds: params.rounds,
    });

    // save fight
    const savedFight = await fight.save();

    // update fighters by adding the fight ID to their fights arrays
    await Fighter.updateOne(
        { _id: params.fighter1_id },
        { $push: { fights: savedFight._id } }
    );
    await Fighter.updateOne(
        { _id: params.fighter2_id },
        { $push: { fights: savedFight._id } }
    );
}


async function update(id, params) {
    const fight = Fight.findById(id)

    if (!fight) throw 'Fight not found'
    // sinon update le fight
    Object.assign(fight, params)

    await fight.save()
}

async function _delete(id) {
    await Fight.findByIdAndRemove(id)
}
