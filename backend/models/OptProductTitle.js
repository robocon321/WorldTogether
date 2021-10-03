const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const now = Date.now;

const OptProductTitleSchema = new Schema({
  _id: {
    type: Number,
    required: true,
    default: now,
  },
  product_id: {
    type: Number,
    ref: "Product",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  datatype: {
    type: Number,
    required: true,
  }
})

module.exports = mongoose.model("OptProductTitle", OptProductTitleSchema);
