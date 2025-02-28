const express = require('express');
const productsRouter = express.Router();
const productService = require('./service/productService');



 

productsRouter.get('/api/products', (req,res)=>{
    res.send(productService.getAllProducts());
});



productsRouter.post('/api/products', (req,res)=>{

    res.status(201).json(productService.createNewProduct(req.body));
});

productsRouter.put('/api/products/:id', (req,res)=>{
    const {id} = req.params;
    const updatedProduct = productService.updateProduct(id,req.body);
    res.status(201).json(updatedProduct);
    
});

productsRouter.delete('/api/products/:id', (req,res)=>{
    const {id} = req.params;
    productService.deleteProduct(id);
    res.status(201).json({message:"Product deleted successfully"});
})

module.exports = productsRouter;