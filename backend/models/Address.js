const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const now = Date.now;
const AddressSchema = new Schema({
  _id: {
    type: Number,
    required: true,
    default: now
  },
  company: {
    type: String,
    required: true
  },
  phone: {
    type: String, 
    required: true,
  },
  province: {
    type: Integer,
    required: true,
  },
  district: {
    type: Integer,
    required: true
  },
  sub_district: {
    type: Integer,
    required: true
  },
  detail: {
    type: String, 
    required: true,
  },
  type_address: {
    type: Integer,
    required: true
  },
  is_delete: {
    type: Boolean,
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

});

module.exports = mongoose.model('Address', AddressSchema);
