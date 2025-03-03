const express = require('express');
const { productServices } = require('../services');
const productRouter = express.Router();


//get all products API
productRouter.get('/',(req,res)=>{
    res.send(productServices.getAllProducts());
});

//Create new product API
productRouter.post('/',(req,res)=>{
    res.status(201).json(productServices.createNewProduct(req.body));
});




module.exports = productRouter;