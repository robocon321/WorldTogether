const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const now = Date.now;

const ShopSchema = new Schema({
  _id: {
    type: Number,
    required: true,
    default:now,
  },
  title: {
    type: String,
    required: true
  },
  descrp: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  meta_keyword: {
    type: String, 
    required: true,
  },
  meta_descrp: {
    type: String, 
    required: true,
  },
  meta_title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true
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
  view_count:  {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("Shop", ShopSchema);