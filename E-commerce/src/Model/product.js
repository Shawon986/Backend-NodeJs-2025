const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {type: String,required: true},
    price: {type: Number,required: true,default: 0},
    quantity: {type: Number,required: true,default: 0},
    category: [String],
    image: {type: String,required: true},
    brand: {type: String},   
    description: {type: String},
    deleted: {type: Boolean, default: false},
    deletedAt: {type: Date},
    
}, {timestamps:true});

const Product = mongoose.model('Product', productSchema);

exports.Product = Product;
