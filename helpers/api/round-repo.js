import { db } from 'helpers/api'
import { userAgent } from 'next/server'


const Round = db.Round
const Fighter = db.Fighter
const Fight = db.Fight

export const roundRepo = {
    getAll,
    getById,
    createRound,
    getRoundCountByFightId,
    update,

    delete: _delete,
}

// get all fights and populate fighter1 and fighter2
async function getAll() {
    return await Round.find().populate('fight').populate('createdBy')
}

async function getById(id) {
    return await Round.findById(id)
}

// create round with body params
async function createRound(params) {
    const round = new Round({
        fight: params.fight,
        round: params.round,
        att_og_1_by_fighter1: params.att_og_1_by_fighter1,
        att_og_2_by_fighter1: params.att_og_2_by_fighter1,
        att_og_3_by_fighter1: params.att_og_3_by_fighter1,
        att_og_4_by_fighter1: params.att_og_4_by_fighter1,
        att_og_5_by_fighter1: params.att_og_5_by_fighter1,
        att_og_1_by_fighter2: params.att_og_1_by_fighter2,
        att_og_2_by_fighter2: params.att_og_2_by_fighter2,
        att_og_3_by_fighter2: params.att_og_3_by_fighter2,
        att_og_4_by_fighter2: params.att_og_4_by_fighter2,
        att_og_5_by_fighter2: params.att_og_5_by_fighter2,
        att_od_1_by_fighter1: params.att_od_1_by_fighter1,
        att_od_2_by_fighter1: params.att_od_2_by_fighter1,
        att_od_3_by_fighter1: params.att_od_3_by_fighter1,
        att_od_4_by_fighter1: params.att_od_4_by_fighter1,
        att_od_5_by_fighter1: params.att_od_5_by_fighter1,
        att_od_1_by_fighter2: params.att_od_1_by_fighter2,
        att_od_2_by_fighter2: params.att_od_2_by_fighter2,
        att_od_3_by_fighter2: params.att_od_3_by_fighter2,
        att_od_4_by_fighter2: params.att_od_4_by_fighter2,
        att_od_5_by_fighter2: params.att_od_5_by_fighter2,
        att_fg_1_by_fighter1: params.att_fg_1_by_fighter1,
        att_fg_2_by_fighter1: params.att_fg_2_by_fighter1,
        att_fg_3_by_fighter1: params.att_fg_3_by_fighter1,
        att_fg_4_by_fighter1: params.att_fg_4_by_fighter1,
        att_fg_5_by_fighter1: params.att_fg_5_by_fighter1,
        att_fg_1_by_fighter2: params.att_fg_1_by_fighter2,
        att_fg_2_by_fighter2: params.att_fg_2_by_fighter2,
        att_fg_3_by_fighter2: params.att_fg_3_by_fighter2,
        att_fg_4_by_fighter2: params.att_fg_4_by_fighter2,
        att_fg_5_by_fighter2: params.att_fg_5_by_fighter2,
        att_fd_1_by_fighter1: params.att_fd_1_by_fighter1,
        att_fd_2_by_fighter1: params.att_fd_2_by_fighter1,
        att_fd_3_by_fighter1: params.att_fd_3_by_fighter1,
        att_fd_4_by_fighter1: params.att_fd_4_by_fighter1,
        att_fd_5_by_fighter1: params.att_fd_5_by_fighter1,
        att_fd_1_by_fighter2: params.att_fd_1_by_fighter2,
        att_fd_2_by_fighter2: params.att_fd_2_by_fighter2,
        att_fd_3_by_fighter2: params.att_fd_3_by_fighter2,
        att_fd_4_by_fighter2: params.att_fd_4_by_fighter2,
        att_fd_5_by_fighter2: params.att_fd_5_by_fighter2,
        def_og_1_by_fighter1: params.def_og_1_by_fighter1,
        def_og_2_by_fighter1: params.def_og_2_by_fighter1,
        def_og_3_by_fighter1: params.def_og_3_by_fighter1,
        def_og_4_by_fighter1: params.def_og_4_by_fighter1,
        def_og_5_by_fighter1: params.def_og_5_by_fighter1,
        def_og_1_by_fighter2: params.def_og_1_by_fighter2,
        def_og_2_by_fighter2: params.def_og_2_by_fighter2,
        def_og_3_by_fighter2: params.def_og_3_by_fighter2,
        def_og_4_by_fighter2: params.def_og_4_by_fighter2,
        def_og_5_by_fighter2: params.def_og_5_by_fighter2,
        def_od_1_by_fighter1: params.def_od_1_by_fighter1,
        def_od_2_by_fighter1: params.def_od_2_by_fighter1,
        def_od_3_by_fighter1: params.def_od_3_by_fighter1,
        def_od_4_by_fighter1: params.def_od_4_by_fighter1,
        def_od_5_by_fighter1: params.def_od_5_by_fighter1,
        def_od_1_by_fighter2: params.def_od_1_by_fighter2,
        def_od_2_by_fighter2: params.def_od_2_by_fighter2,
        def_od_3_by_fighter2: params.def_od_3_by_fighter2,
        def_od_4_by_fighter2: params.def_od_4_by_fighter2,
        def_od_5_by_fighter2: params.def_od_5_by_fighter2,
        def_fg_1_by_fighter1: params.def_fg_1_by_fighter1,
        def_fg_2_by_fighter1: params.def_fg_2_by_fighter1,
        def_fg_3_by_fighter1: params.def_fg_3_by_fighter1,
        def_fg_4_by_fighter1: params.def_fg_4_by_fighter1,
        def_fg_5_by_fighter1: params.def_fg_5_by_fighter1,
        def_fg_1_by_fighter2: params.def_fg_1_by_fighter2,
        def_fg_2_by_fighter2: params.def_fg_2_by_fighter2,
        def_fg_3_by_fighter2: params.def_fg_3_by_fighter2,
        def_fg_4_by_fighter2: params.def_fg_4_by_fighter2,
        def_fg_5_by_fighter2: params.def_fg_5_by_fighter2,
        def_fd_1_by_fighter1: params.def_fd_1_by_fighter1,
        def_fd_2_by_fighter1: params.def_fd_2_by_fighter1,
        def_fd_3_by_fighter1: params.def_fd_3_by_fighter1,
        def_fd_4_by_fighter1: params.def_fd_4_by_fighter1,
        def_fd_5_by_fighter1: params.def_fd_5_by_fighter1,
        def_fd_1_by_fighter2: params.def_fd_1_by_fighter2,
        def_fd_2_by_fighter2: params.def_fd_2_by_fighter2,
        def_fd_3_by_fighter2: params.def_fd_3_by_fighter2,
        def_fd_4_by_fighter2: params.def_fd_4_by_fighter2,
        def_fd_5_by_fighter2: params.def_fd_5_by_fighter2,
        cac_og_1_by_fighter1: params.cac_og_1_by_fighter1,
        cac_og_2_by_fighter1: params.cac_og_2_by_fighter1,
        cac_og_3_by_fighter1: params.cac_og_3_by_fighter1,
        cac_og_4_by_fighter1: params.cac_og_4_by_fighter1,
        cac_og_5_by_fighter1: params.cac_og_5_by_fighter1,
        cac_og_1_by_fighter2: params.cac_og_1_by_fighter2,
        cac_og_2_by_fighter2: params.cac_og_2_by_fighter2,
        cac_og_3_by_fighter2: params.cac_og_3_by_fighter2,
        cac_og_4_by_fighter2: params.cac_og_4_by_fighter2,
        cac_og_5_by_fighter2: params.cac_og_5_by_fighter2,
        cac_od_1_by_fighter1: params.cac_od_1_by_fighter1,
        cac_od_2_by_fighter1: params.cac_od_2_by_fighter1,
        cac_od_3_by_fighter1: params.cac_od_3_by_fighter1,
        cac_od_4_by_fighter1: params.cac_od_4_by_fighter1,
        cac_od_5_by_fighter1: params.cac_od_5_by_fighter1,
        cac_od_1_by_fighter2: params.cac_od_1_by_fighter2,
        cac_od_2_by_fighter2: params.cac_od_2_by_fighter2,
        cac_od_3_by_fighter2: params.cac_od_3_by_fighter2,
        cac_od_4_by_fighter2: params.cac_od_4_by_fighter2,
        cac_od_5_by_fighter2: params.cac_od_5_by_fighter2,
        cac_fg_1_by_fighter1: params.cac_fg_1_by_fighter1,
        cac_fg_2_by_fighter1: params.cac_fg_2_by_fighter1,
        cac_fg_3_by_fighter1: params.cac_fg_3_by_fighter1,
        cac_fg_4_by_fighter1: params.cac_fg_4_by_fighter1,
        cac_fg_5_by_fighter1: params.cac_fg_5_by_fighter1,
        cac_fg_1_by_fighter2: params.cac_fg_1_by_fighter2,
        cac_fg_2_by_fighter2: params.cac_fg_2_by_fighter2,
        cac_fg_3_by_fighter2: params.cac_fg_3_by_fighter2,
        cac_fg_4_by_fighter2: params.cac_fg_4_by_fighter2,
        cac_fg_5_by_fighter2: params.cac_fg_5_by_fighter2,
        cac_fd_1_by_fighter1: params.cac_fd_1_by_fighter1,
        cac_fd_2_by_fighter1: params.cac_fd_2_by_fighter1,
        cac_fd_3_by_fighter1: params.cac_fd_3_by_fighter1,
        cac_fd_4_by_fighter1: params.cac_fd_4_by_fighter1,
        cac_fd_5_by_fighter1: params.cac_fd_5_by_fighter1,
        cac_fd_1_by_fighter2: params.cac_fd_1_by_fighter2,
        cac_fd_2_by_fighter2: params.cac_fd_2_by_fighter2,
        cac_fd_3_by_fighter2: params.cac_fd_3_by_fighter2,
        cac_fd_4_by_fighter2: params.cac_fd_4_by_fighter2,
        cac_fd_5_by_fighter2: params.cac_fd_5_by_fighter2,
        gj_by_fighter1: params.gj_by_fighter1,
        gj_by_fighter2: params.gj_by_fighter2,
        hits_by_fighter1: params.hits_by_fighter1,
        hits_by_fighter2: params.hits_by_fighter2,
        round_winner_id: params.round_winner_id,
        createdBy: params.createdBy,


    });

    // save fight
    const savedRound = await round.save();

    // update fighters by adding the fight ID to their fights arrays
    await Fight.updateOne(
        { _id: params.fight },
        { $push: { rounds: savedRound._id } }
    );
    // update the winner by adding the round_winner_id in their winner_id array
    await Fight.updateOne(
        { _id: params.fight },
        { $push: { winner_id: savedRound.round_winner_id } }
    );

}


async function update(id, params) {
    const round = Round.findById(id)

    if (!round) throw 'Round not found'
    // sinon update le round
    Object.assign(round, params)

    await round.save()
}

async function _delete(id) {
    await Round.findByIdAndRemove(id)
}

async function getRoundCountByFightId(id) {
    const round = await Round.find({ fight: id })
    return round.length
}
