const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const now = Date.now;
const NotificationSchema = new Schema({
  _id: {
    type: Number,
    required: true,
    default: now
  }, 
  type: {
    type: Number,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  receive_date: {
    type: Number,
    required: true,
    default: now,
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
  old_id: {
    type: Number,
    ref: "Account",
    default: null
  },
})

module.exports = mongoose.model("Notification", NotificationSchema);
