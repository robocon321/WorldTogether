const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const now = Date.now;
const ProductAttributeValueSchema = new Schema({
  _id: {
    type: Number, 
    required: true,
    default: now
  },
  attr_id: {
    type: Number, 
    ref: "Attribute",
    required: true
  },
  product_id: {
    type: Number,
    ref: "Product",
    required: true
  },
  text_value: {
    type: String,
    default: null
  },
  number_value: {
    type: Number,
    default: null
  },
  date_value: {
    type: Date,
    default: null
  }
});

module.exports = mongoose.model("ProductAttributeValue", ProductAttributeValueSchema);