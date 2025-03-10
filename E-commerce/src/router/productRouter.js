const express = require('express');
const { productServices } = require('../service');


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
    res.status(201).json(productServices.createProduct(req.body));

});

//Update product API
productRouter.put('/:id', (req,res)=>{
    const id = req.params.id;
    const payload = req.body;
    const productIndex = products.findIndex((product)=>product._id===id);
    if(productIndex === -1){
        return res.status(404).send(`No product has found with this id ${id}`);
    }
    products[productIndex] = { ...products[productIndex], ...payload};
    res.json(products[productIndex]);
});

//Delete product api
productRouter.delete('/:id',(req,res)=>{
    const id = req.params.id;
    const productIndex = products.findIndex((product)=>product._id===id);
    if(productIndex === -1){
        return res.status(404).send(`No product has found with this id ${id}`);
    }
    products.splice(productIndex,1);
    res.json({ message:"Product has deleted" });
});

module.exports = productRouter;