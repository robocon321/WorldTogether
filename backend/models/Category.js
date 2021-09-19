const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const now = Date.now;
const CategorySchema = Schema({
  _id: {
    type: Number,
    default: now,
    required: true
  }, 
  title: {
    type: String, 
    required: true,
  },
  display_order: {
    type: Number, 
    required: true,
    default: now
  },
  meta_keyword: {
    type: String,
    required: true
  },
  meta_descrp: {
    type: String,
    required: true
  },
  meta_tile: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true,
  },
  view_count: {
    typs: Number,
    default: 0
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
    type: Date,
    ref: "Account",
    default: null
  }, 
})

module.exports = mongoose.model("Cateogry", CategorySchema);