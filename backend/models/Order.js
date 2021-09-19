import { ORDER_STATUS } from "../utils/Constant";
const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const now = Date.now;

const OrderSchema = new Schema({
  _id: {
    type: Number,
    required: true,
    default: now
  },
  order_date: {
    type: Date,
    required: true,
  },
  receive_date: {
    type: Date,
    required: true,
  },
  status: {
    type: Number,
    default: ORDER_STATUS.SENDING_TO_SHIP
  },
  discount: {
    type: Number,
    default: 0,
  },
  ship: {
    type: Number,
    default: 0,
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

module.exports = mongoose.model("Order", OrderSchema);
