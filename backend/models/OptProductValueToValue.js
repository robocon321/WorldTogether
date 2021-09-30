const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OptProductValueToValueSchema = new Schema({
  id_value1: {
    type: Number,
    required: true,
    ref: "OptProductValue"
  },
  id_value2: {
    type: Number,
    required: true,
    ref: "OptProductValue"
  }
});

OptProductValueToValueSchema.index({id_value1: 1, id_value2}, {unique: true});

module.exports = mongoose.model("OptProductValueToValue", OptProductValueToValueSchema);
