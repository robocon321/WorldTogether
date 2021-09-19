const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const now = Date.now;

const TagSchema = new Schema({
  _id: {
    type: Number,
    required: true,
    default: now,
  },
  name: {
    type: String,
    required: true,
  },
  view_count: {
    type: Number,
    default: 0,
  },
  use_count: {
    type: Number,
    default:0,
  }
})


module.exports = mongoose.model("Tag", TagSchema);
