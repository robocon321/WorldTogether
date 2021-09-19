const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const now = Date.now;

const SearchSchema = new Schema({
  _id: {
    type: Number,
    required: true,
    default: now
  },
  content: {
    type: String,
    required: true,
  },
  search_count: {
    type: Number,
    default: 0,
  }
})

module.exports = mongoose.model("Search", SearchSchema);
