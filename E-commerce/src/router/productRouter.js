const express = require('express');
const { productServices } = require('../services');
const productRouter = express.Router();





//Get all products API
productRouter.get('/',(req,res)=>{
    res.send(productServices.getAllProducts());
});

//Get one product by id API
productRouter.get('/:id', (req,res)=>{
    res.send(productServices.getProductById(req.params.id));
});

//Create new product API
productRouter.post('/', (req,res)=>{
    const payload = req.body;
    res.status(201).json(productServices.createProduct(payload));
});

//Update product API
productRouter.put('/:id', (req,res)=>{
    const id = req.params.id;
    const payload = req.body;
    res.json(productServices.updateProduct(id,payload));
}); 

//Delete product api
productRouter.delete('/:id',(req,res)=>{
    const id = req.params.id;
    productServices.deleteProduct(id);
    res.json({ message:"Product has deleted" });
});

module.exports = productRouter;