const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true, default: 0},
    brand: {type: String},
    quantity: {type: Number, required: true, default: 0},
    categories: {type: String},

});

const Product = mongoose.model('Product', productSchema);
exports.Product = Product;
