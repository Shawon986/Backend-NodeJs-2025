const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {type : String, required : true},
    description : String,
    price : {type: Number, required : true},
    brand: String,
    category : [String]
},

{timestamps :true},

);

const Product = mongoose.model('Product' , productSchema);

exports.Product = Product; 