const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const now = Date.now;
const AttributeSchema = new Schema({
  _id: {
    type: Number, 
    default: now,
    required: true
  },
  category_id: {
    type: Number,
    ref: "Category",
    required: true
  },
  title: {
    type: String,
    required: true
  },
  datetype: {
    type: Number, 
    required: true
  }
})

module.exports = mongoose.model("Attribute", AttributeSchema);
