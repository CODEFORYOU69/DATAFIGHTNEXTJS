import { db } from 'helpers/api'
import { userAgent } from 'next/server'
const mongoose = require('mongoose')


const Fight = db.Fight
const Fighter = db.Fighter

export const fightRepo = {
    getAll,
    getById,
    createFight,
    update,
    delete: _delete,
    filterFights
}

// get all fights and populate fighter1 and fighter2
async function getAll() {
    return await Fight.find().populate('fighter1_id').populate('fighter2_id').populate('winner_id').populate('createdBy')
}

async function getById(id) {
    return await Fight.findById(id)
}

// create fight with body params
async function createFight(params) {
    const fight = new Fight({
        eventyear: params.eventyear,
        eventtype: params.eventtype,
        eventname: params.eventname,
        category: params.category,
        weightcat: params.weightcat,
        fighter1_id: params.fighter1_id,
        fighter2_id: params.fighter2_id,
        rounds: params.rounds,
        createdBy: params.createdBy,
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
    const fight = await Fight.findById(id)

    if (!fight) throw 'Fight not found'
    // sinon update le fight
    Object.assign(fight, params)

    await fight.save()
}


async function _delete(id) {
    const fight = await Fight.findById(id)
    if (fight.createdBy.toString() === userSubject.value.id.toString()) {
        throw 'You cannot delete this fight'
    }
    await Fight.findByIdAndRemove(id)
}

// filter fights by params (eventyear , eventtype, eventname, category, weightcat) and populate fighter1 and fighter2 for filter by fighter sex country lastname and firstname using lookup and match mongodb


async function filterFights(filters) {

    const query = []

    const filterMap = {
        eventyear: (value) => ({ eventyear: parseInt(value) }),
        eventtype: (value) => ({ eventtype: value }),
        eventname: (value) => ({ eventname: value }),
        category: (value) => ({ category: value }),
        weightcat: (value) => ({ weightcat: parseInt(value) }),
    };

    Object.keys(filterMap).forEach((key) => {
        if (filters[key]) {
            query.push(filterMap[key](filters[key]));
        }
    });

    const pipeline = [
        {
            $lookup: {
                from: "fighters",
                localField: "fighter1_id",
                foreignField: "_id",
                as: "fighter1"
            }
        },

        { $unwind: "$fighter1" },
        {
            $lookup: {
                from: "fighters",
                localField: "fighter2_id",
                foreignField: "_id",
                as: "fighter2"
            }
        },
        {
            $lookup: {
                from: "rounds",
                localField: "rounds",
                foreignField: "_id",
                as: "rounds"
            }
        },

        {
            $addFields: {
                fighter2_log: "$fighter2"
            }
        },


        { $unwind: "$fighter2" },
    ];

    const addFighterFilter = (fighterKey, filterKey) => {
        if (filters[filterKey]) {
            const fighterId = new mongoose.Types.ObjectId(filters[filterKey]);
            query.push({ [fighterKey]: fighterId });
        }
    };

    addFighterFilter("fighter1._id", "fighter1");
    addFighterFilter("fighter2._id", "fighter2");
    if (filters.country) {
        query.push({ $or: [{ "fighter1.country": filters.country }, { "fighter2.country": filters.country }] });
    }

    if (filters.sex) {
        query.push({ $or: [{ "fighter1.sex": filters.sex }, { "fighter2.sex": filters.sex }] });
    }
    pipeline.push({ $match: { $and: query } });

    const result = await Fight.aggregate(pipeline);
    return result;
}
