const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const now = Date.now;
const OptProductValueSchema = new Schema({
  _id: {
    type: Number,
    required: true,
    default: now
  },
  opt_title_id: {
    type: Number,
    required: true,
    ref: "OptProductTitle"
  },
  text_value: {
    type: String,
    default: null
  },
  number_value: {
    type: Number,
    default: null,
  },
  date_value: {
    type: Date,
    default: null
  },
  opt_real_price: {
    type: Number,
    required: true,
  },
  opt_sale_price: {
    type: Number,
    required: true
  },
  avatar: {
    type: String,
    required: true,
  },
  imgs: {
    type: String,
    default: null
  }
});

module.exports = mongoose.model("OptProductValue", OptProductValueSchema);

