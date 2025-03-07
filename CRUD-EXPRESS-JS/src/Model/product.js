const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {type : String, required : true},
    description : String,
    price : {type: Number, required : true},
    quantity : {type: Number, required : true},
    category : [String]
});

const Product = mongoose.model('Product' , productSchema);

exports.Product = Product;