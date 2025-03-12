const express = require('express');
const { productServices } = require('../service');
const { productController } = require('../controller');

const productRouter = express.Router();



//Get all products API
productRouter.get('/',productController.getAllProducts);

//Get one product by id API
productRouter.get('/:id', productController.getProductById);

//Create new product API
productRouter.post('/', productController.createProduct);

//Update product API
productRouter.put('/:id', (req,res)=>{
    const id = req.params.id;
    res.json(productServices.updateProduct(id,req.body));
});

//Delete product api
productRouter.delete('/:id',(req,res)=>{
    const id = req.params.id;
    productServices.deleteProduct(id);
    res.json({ message:"Product has deleted" });
});

module.exports = productRouter;