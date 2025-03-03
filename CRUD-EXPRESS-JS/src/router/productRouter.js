const express = require('express');
const { productServices } = require('../services');
const productRouter = express.Router();


//get all products API
productRouter.get('/',(req,res)=>{
    res.send(productServices.getAllProducts());
})




module.exports = productRouter;