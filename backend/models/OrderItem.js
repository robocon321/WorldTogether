const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const OrderItemSchema = new Schema({
  order_id: {
    type: Number,
    required: true,
    ref: "Order"
  },
  product_id: {
    type: Number,
    required: true,
    ref: "Product"
  },
  amount: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  }
});

OrderItemSchema.index({order_id: 1, product_id: 1}, {unique: true});

module.exports = mongoose.model("OrderItem", OrderItemSchema);
