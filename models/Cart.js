const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    itemId: { type: String, required: true, index: { unique: true } },
    price: { type: String, required: true },
    name: { type: String, required: true },
})

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;