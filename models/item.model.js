const mongoose = require('mongoose');	

const ItemSchema = new mongoose.Schema({
    food_id: { type: mongoose.Schema.Types.ObjectId, ref: 'foods', required: true }, // Liên kết với món ăn
    cart_id: { type: mongoose.Schema.Types.ObjectId, ref: 'cart', required: true }, // Liên kết với giỏ hàng
    quantity: { type: Number, required: true }
});
module.exports = mongoose.model('items', ItemSchema);