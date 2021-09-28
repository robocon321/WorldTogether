const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cst = require("../utils/Constant");

let now = Date.now;
const AccountSchema = new Schema({
  _id: {
    type: Number,
    required: true,
    default: now
  },
  uname: {
    type: String,
    required: true,
  },
  pwd: {
    type: String, 
    required: true,
  },
  full_name: {
    type: String,
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
  },
  sex: {
    type: Boolean,
    default: true,
    // True is Male, False is Female
  },
  birthday: {
    type: Date,
  },
  addr_id: {
    type: Schema.Types.ObjectId,
    default: null,
    ref: "Address"
  },
  is_delete: {
    type: Boolean,
    default: false
  },
  cre_time: {
    type: Date,
    default: now
  },
  cre_uid: {
    type: Number,
    ref: "Account",
    default: now,
  },
  mod_time: {
    type: Date,
    default: null
  },
  mod_uid: {
    type: Number,
    ref: "Account",
    default: null
  },
  old_id: {
    type: Number,
    ref: "Account",
    default: null
  },
  fb_id: {
    type: String,
    default: null,
  },
  zalo_id: {
    type: String,
    default: null,
  },
  gg_id: {
    type: String,
    default: null
  },
  permission: {
    type: Number,
    default: cst.PERMISSION.ROOT
  }
})

module.exports = mongoose.model('Account', AccountSchema);
