const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  uid: {
    type: Number,
    ref: "Account",
    required: true,
  },
  product_id: {
    type: Number,
    ref: "Product",
    required: true
  },
  amount: {
    type: Number,
    required: false,
    default: 1
  }
});

CartSchema.index({uid: 1, product_id: 1}, {unique: true});

module.exports = mongoose.model("Cart", CartSchema);