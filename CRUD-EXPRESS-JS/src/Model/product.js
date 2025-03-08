const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {type : String, required : true},
    description : String,
    price : {type: Number, required : true},
    brand: String,
    category : [String],
    deleted : {type : Boolean, default : false},
    deletedAt : {type : Date, default : null},
},

{timestamps :true},

);

const Product = mongoose.model('Product' , productSchema);

exports.Product = Product; 