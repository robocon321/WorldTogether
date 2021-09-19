const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const now = Date.now;

const ShopFollowSchema = new Schema({
  product_id: {
    type: Number,
    ref: "Product",
    required: true
  },
  uid: {
    type: Number,
    ref: "Account",
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
    type: Date,
    ref: "Account",
    default: null
  },
});

ShopFollowSchema.index({product_id: 1, uid: 1}, {unique: true});

module.exports = mongoose.model("ShopFollow", ShopFollowSchema);