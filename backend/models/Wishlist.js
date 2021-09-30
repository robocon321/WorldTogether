const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WishlistSchema = new Schema({
  uid: {
    type: Number,
    ref: "Account",
    required: true,
  },
  product_id: {
    type: Number,
    ref: "Product",
    required: true
  }
});

WishlistSchema.index({uid: 1, product_id: 1}, {unique: true});

module.exports = mongoose.model("Wishlist", WishlistSchema);