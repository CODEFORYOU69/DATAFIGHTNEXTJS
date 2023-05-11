import { db } from 'helpers/api'
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

// filter fights by params (eventyear , eventtype, eventname, category, weightcat) and populate fighter1 and fighter2 for filter by fighter sex country lastname and firstname using lookup and match mongodb

// async function filterFights(filters) {
//     const query = {}

//     if (filters.eventyear) {
//         query.eventyear = filters.eventyear
//     }

//     if (filters.eventtype) {
//         query.eventtype = filters.eventtype
//     }

//     if (filters.country) {
//         query["fighter1_id.country"] = filters.country
//     }
//     if (filters.country) {
//         query["fighter2_id.country"] = filters.country
//     }
//     if (filters.fighter1) {
//         query["fighter1_id"] = filters.fighter1
//     }
//     if (filters.fighter1) {
//         query["fighter2_id"] = filters.fighter1
//     }
//     if (filters.fighter2) {
//         query["fighter2_id"] = filters.fighter2
//     }
//     if (filters.fighter2) {
//         query["fighter1_id"] = filters.fighter2
//     }
//     if (filters.sex) {
//         query["fighter1_id.sex"] = filters.sex
//     }
//     if (filters.sex) {
//         query["fighter2_id.sex"] = filters.sex
//     }
//     if (filters.eventname) {
//         query.eventname = filters.eventname
//     }
//     if (filters.category) {
//         query.category = filters.category
//     }
//     if (filters.weightcat) {
//         query.weightcat = filters.weightcat
//     }


//     // Include your other filters here...

//     const result = await Fight.aggregate([
//         {
//             $lookup: {
//                 from: "fighters",
//                 localField: "fighter1_id",
//                 foreignField: "_id",
//                 as: "fighter1"
//             }
//         },

//         {
//             $lookup: {
//                 from: "fighters",
//                 localField: "fighter2_id",
//                 foreignField: "_id",
//                 as: "fighter2"
//             }
//         },
//         {
//             $lookup: {
//                 from: "fighters",
//                 localField: "fighter1_id",
//                 foreignField: "_id",
//                 as: "fighter2"
//             }
//         },

//         {
//             $lookup: {
//                 from: "fighters",
//                 localField: "fighter2_id",
//                 foreignField: "_id",
//                 as: "fighter1"
//             }
//         },

//         {
//             $lookup: {
//                 from: "fighters",
//                 localField: "fighter1_id",
//                 foreignField: "_id",
//                 as: "sex"
//             }
//         },
//         {
//             $lookup: {
//                 from: "fighters",
//                 localField: "fighter1_id",
//                 foreignField: "_id",
//                 as: "country"
//             }
//         },
//         {
//             $lookup: {
//                 from: "fighters",
//                 localField: "fighter2_id",
//                 foreignField: "_id",
//                 as: "sex"
//             }
//         },
//         {
//             $lookup: {
//                 from: "fighters",
//                 localField: "fighter2_id",
//                 foreignField: "_id",
//                 as: "country"
//             }
//         },

//         {
//             $match: query
//         }
//     ]);

//     return result;
// }
// async function filterFights(filters) {
//     console.log('filtersapi', filters);
//     const query = {}

//     if (filters.eventyear) {
//         query.eventyear = filters.eventyear
//     }

//     if (filters.eventtype) {
//         query.eventtype = filters.eventtype
//     }

//     if (filters.eventname) {
//         query.eventname = filters.eventname
//     }
//     if (filters.category) {
//         query.category = filters.category
//     }
//     if (filters.weightcat) {
//         query.weightcat = filters.weightcat
//     }

//     // Définition de la pipeline d'agrégation
//     const pipeline = [
//         {
//             $lookup: {
//                 from: "fighters",
//                 localField: "fighter1_id",
//                 foreignField: "_id",
//                 as: "fighter1"
//             }
//         },
//         { $unwind: "$fighter1" },
//         {
//             $lookup: {
//                 from: "fighters",
//                 localField: "fighter2_id",
//                 foreignField: "_id",
//                 as: "fighter2"
//             }
//         },
//         { $unwind: "$fighter2" },
//     ];
//     console.log("queryapi", query);
//     console.log("pipelineapi", pipeline);
//     // Ajout des filtres pour les champs de "fighter"
//     if (filters.country) {
//         query["fighter1.country"] = filters.country;
//         query["fighter2.country"] = filters.country;
//     }
//     if (filters.fighter1) {
//         query["fighter1._id"] = filters.fighter1;
//         query["fighter2._id"] = filters.fighter1;
//     }
//     if (filters.fighter2) {
//         query["fighter1._id"] = filters.fighter2;
//         query["fighter2._id"] = filters.fighter2;
//     }
//     if (filters.sex) {
//         query["fighter1.sex"] = filters.sex;
//         query["fighter2.sex"] = filters.sex;
//     }

//     // Ajout de l'étape $match à la pipeline
//     pipeline.push({ $match: query });

//     const result = await Fight.aggregate(pipeline);

//     return result;
// }

async function filterFights(filters) {
    console.log('filtersapi', filters);
    console.log('fighter1', filters.fighter1);
    const query = []

    if (filters.eventyear) {
        query.push({ eventyear: parseInt(filters.eventyear) });
    }

    if (filters.eventtype) {
        query.push({ eventtype: filters.eventtype });
    }

    if (filters.eventname) {
        query.push({ eventname: filters.eventname });
    }

    if (filters.category) {
        query.push({ category: filters.category });
    }

    if (filters.weightcat) {
        query.push({ weightcat: parseInt(filters.weightcat) });
    }

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
    console.log('query', query)
    if (filters.country) {
        query.push({ $or: [{ "fighter1.country": filters.country }, { "fighter2.country": filters.country }] });
    }

    if (filters.fighter1) {
        const fighter1Id = new mongoose.Types.ObjectId(filters.fighter1);
        query.push({ $or: [{ "fighter1._id": fighter1Id }, { "fighter2._id": fighter1Id }] });
    }

    if (filters.fighter2) {
        const fighter2Id = new mongoose.Types.ObjectId(filters.fighter2);
        query.push({ $or: [{ "fighter1._id": fighter2Id }, { "fighter2._id": fighter2Id }] });
    }


    if (filters.sex) {
        query.push({ $or: [{ "fighter1.sex": filters.sex }, { "fighter2.sex": filters.sex }] });
    }
    console.log('query2', query)
    pipeline.push({ $match: { $and: query } });

    const result = await Fight.aggregate(pipeline);

    return result;
}
