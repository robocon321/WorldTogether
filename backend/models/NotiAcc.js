import {NOTI_ACC_STATUS} from "../utils/Constant";
const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const NotiAccSchema = new Schema({
  noti_id: {
    type: Number,
    ref: "Notification",
    required: true
  },
  uid: {
    type: Number,
    ref: "Account",
    required: true
  },
  status: {
    type: Number,
    default: NOTI_ACC_STATUS.UNREAD,
    // 0: unread, 1: read, 2: delete
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
});

NotiAccSchema.index({noti_id: 1, uid: 1}, {unique: true});

module.exports = mongoose.model("NotiAcc", NotiAccSchema);