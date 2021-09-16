const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const AddressSchema = new Schema({
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
    required: true,
    default: false
  },
  cre_time: {
    type: Date,
    required: true,
    default: Date.now()
  },
  cre_uid: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Account"
  },
  mod_time: {
    type: Date,
    default: null,
  },
  mod_uid: {
    type: Date,
    default: null,
  }
});

module.exports = mongoose.model('Address', AddressSchema);
