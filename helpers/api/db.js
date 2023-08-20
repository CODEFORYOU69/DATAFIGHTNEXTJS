import getConfig from 'next/config'
const mongoose = require('mongoose')

const { serverRuntimeConfig } = getConfig()
const Schema = mongoose.Schema
const MONGODB = process.env.MONGODB_URI || serverRuntimeConfig.connectionString

export const db = {
  User: userModel(),
  Fighter: fighterModel(),
  Fight: fightModel(),
  Round: roundModel(),
}

// mongoose models with schema definitions

function userModel() {
  const schema = new Schema(
    {
      email: { type: String, unique: true, required: true },
      hash: { type: String, required: true },
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      country: { type: String, required: true },
      role: { type: String, required: true, default: 'user' },
      resetPasswordToken: { type: String, required: false },
      resetPasswordExpires: { type: Date, required: false },


    },
    {
      // add createdAt and updatedAt timestamps
      timestamps: true,
    }
  )

  schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
      delete ret._id
      delete ret.hash
    },
  })

  return mongoose.models.User || mongoose.model('User', schema)
}

function fighterModel() {
  const schema = new Schema(
    {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      sex: { type: String, required: true },
      country: { type: String, required: true },
      birthDate: { type: String, required: true },
      category: { type: String, required: true },
      weightCategory: { type: String, required: true },
      photo: { type: String, required: false },
      createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },

      // store fight object ids in array and for each fight store his round objectid data
      fights: [{ type: Schema.Types.ObjectId, ref: 'Fight' }],
    },
    {
      // add createdAt and updatedAt timestamps
      timestamps: true,
    }
  )

  schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
      delete ret._id
      delete ret.hash
    },
  })

  return mongoose.models.Fighter || mongoose.model('Fighter', schema)
}

function roundModel() {
  const schema = new Schema(
    {
      round: { type: Number, required: true },
      att_og_1_by_fighter1: Number,
      att_og_2_by_fighter1: Number,
      att_og_3_by_fighter1: Number,
      att_og_4_by_fighter1: Number,
      att_og_5_by_fighter1: Number,
      att_og_1_by_fighter2: Number,
      att_og_2_by_fighter2: Number,
      att_og_3_by_fighter2: Number,
      att_og_4_by_fighter2: Number,
      att_og_5_by_fighter2: Number,
      att_od_1_by_fighter1: Number,
      att_od_2_by_fighter1: Number,
      att_od_3_by_fighter1: Number,
      att_od_4_by_fighter1: Number,
      att_od_5_by_fighter1: Number,
      att_od_1_by_fighter2: Number,
      att_od_2_by_fighter2: Number,
      att_od_3_by_fighter2: Number,
      att_od_4_by_fighter2: Number,
      att_od_5_by_fighter2: Number,
      att_fg_1_by_fighter1: Number,
      att_fg_2_by_fighter1: Number,
      att_fg_3_by_fighter1: Number,
      att_fg_4_by_fighter1: Number,
      att_fg_5_by_fighter1: Number,
      att_fg_1_by_fighter2: Number,
      att_fg_2_by_fighter2: Number,
      att_fg_3_by_fighter2: Number,
      att_fg_4_by_fighter2: Number,
      att_fg_5_by_fighter2: Number,
      att_fd_1_by_fighter1: Number,
      att_fd_2_by_fighter1: Number,
      att_fd_3_by_fighter1: Number,
      att_fd_4_by_fighter1: Number,
      att_fd_5_by_fighter1: Number,
      att_fd_1_by_fighter2: Number,
      att_fd_2_by_fighter2: Number,
      att_fd_3_by_fighter2: Number,
      att_fd_4_by_fighter2: Number,
      att_fd_5_by_fighter2: Number,
      def_og_1_by_fighter1: Number,
      def_og_2_by_fighter1: Number,
      def_og_3_by_fighter1: Number,
      def_og_4_by_fighter1: Number,
      def_og_5_by_fighter1: Number,
      def_og_1_by_fighter2: Number,
      def_og_2_by_fighter2: Number,
      def_og_3_by_fighter2: Number,
      def_og_4_by_fighter2: Number,
      def_og_5_by_fighter2: Number,
      def_od_1_by_fighter1: Number,
      def_od_2_by_fighter1: Number,
      def_od_3_by_fighter1: Number,
      def_od_4_by_fighter1: Number,
      def_od_5_by_fighter1: Number,
      def_od_1_by_fighter2: Number,
      def_od_2_by_fighter2: Number,
      def_od_3_by_fighter2: Number,
      def_od_4_by_fighter2: Number,
      def_od_5_by_fighter2: Number,
      def_fg_1_by_fighter1: Number,
      def_fg_2_by_fighter1: Number,
      def_fg_3_by_fighter1: Number,
      def_fg_4_by_fighter1: Number,
      def_fg_5_by_fighter1: Number,
      def_fg_1_by_fighter2: Number,
      def_fg_2_by_fighter2: Number,
      def_fg_3_by_fighter2: Number,
      def_fg_4_by_fighter2: Number,
      def_fg_5_by_fighter2: Number,
      def_fd_1_by_fighter1: Number,
      def_fd_2_by_fighter1: Number,
      def_fd_3_by_fighter1: Number,
      def_fd_4_by_fighter1: Number,
      def_fd_5_by_fighter1: Number,
      def_fd_1_by_fighter2: Number,
      def_fd_2_by_fighter2: Number,
      def_fd_3_by_fighter2: Number,
      def_fd_4_by_fighter2: Number,
      def_fd_5_by_fighter2: Number,
      cac_og_1_by_fighter1: Number,
      cac_og_2_by_fighter1: Number,
      cac_og_3_by_fighter1: Number,
      cac_og_4_by_fighter1: Number,
      cac_og_5_by_fighter1: Number,
      cac_og_1_by_fighter2: Number,
      cac_og_2_by_fighter2: Number,
      cac_og_3_by_fighter2: Number,
      cac_og_4_by_fighter2: Number,
      cac_og_5_by_fighter2: Number,
      cac_od_1_by_fighter1: Number,
      cac_od_2_by_fighter1: Number,
      cac_od_3_by_fighter1: Number,
      cac_od_4_by_fighter1: Number,
      cac_od_5_by_fighter1: Number,
      cac_od_1_by_fighter2: Number,
      cac_od_2_by_fighter2: Number,
      cac_od_3_by_fighter2: Number,
      cac_od_4_by_fighter2: Number,
      cac_od_5_by_fighter2: Number,
      cac_fg_1_by_fighter1: Number,
      cac_fg_2_by_fighter1: Number,
      cac_fg_3_by_fighter1: Number,
      cac_fg_4_by_fighter1: Number,
      cac_fg_5_by_fighter1: Number,
      cac_fg_1_by_fighter2: Number,
      cac_fg_2_by_fighter2: Number,
      cac_fg_3_by_fighter2: Number,
      cac_fg_4_by_fighter2: Number,
      cac_fg_5_by_fighter2: Number,
      cac_fd_1_by_fighter1: Number,
      cac_fd_2_by_fighter1: Number,
      cac_fd_3_by_fighter1: Number,
      cac_fd_4_by_fighter1: Number,
      cac_fd_5_by_fighter1: Number,
      cac_fd_1_by_fighter2: Number,
      cac_fd_2_by_fighter2: Number,
      cac_fd_3_by_fighter2: Number,
      cac_fd_4_by_fighter2: Number,
      cac_fd_5_by_fighter2: Number,
      gj_by_fighter1: Number,
      gj_by_fighter2: Number,
      hits_by_fighter1: Number,
      hits_by_fighter2: Number,
      fight: {
        type: Schema.Types.ObjectId,
        ref: 'Fight',
      },
      round_winner_id: {
        type: Schema.Types.ObjectId,
        ref: 'Fighter',
      },
      createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
    },
    {
      // add createdAt and updatedAt timestamps
      timestamps: true,
    }
  )

  schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
      delete ret._id
      delete ret.hash
    },
  })

  return mongoose.models.Round || mongoose.model('Round', schema)
}

function fightModel() {
  const schema = new Schema(
    {
      eventyear: { type: Number, required: true },
      eventtype: { type: String, required: true },
      eventname: { type: String, required: true },
      category: { type: String, required: true },
      weightcat: { type: Number, required: true },
      createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
      fighter1_id: {
        type: Schema.Types.ObjectId,
        ref: 'Fighter',
      },
      fighter2_id: {
        type: Schema.Types.ObjectId,
        ref: 'Fighter',
      },
      winner_id: [{
        type: Schema.Types.ObjectId,
        ref: 'Fighter',

      }],
      //round Ids for this fight max 3 rounds
      rounds: [{ type: Schema.Types.ObjectId, ref: 'Round' }]
    },
    {
      // add createdAt and updatedAt timestamps
      timestamps: true,
    }
  )

  schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
      delete ret._id
      delete ret.hash
    },
  })

  return mongoose.models.Fight || mongoose.model('Fight', schema)
}
