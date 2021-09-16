const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    unique: true
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
    required: false,
    default: false
  },
  cre_time: {
    type: Date,
    required: true,
    default: now
  },
  cre_uid: {
    type: Number,
    ref: "Account",
    required: true,
    default: now
  },
  mod_time: {
    type: Date,
    default: null
  },
  mod_uid: {
    type: Date,
    default: null
  }
})

module.exports = mongoose.model('Account', AccountSchema);
