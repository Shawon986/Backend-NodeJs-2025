const express = require('express');
const { productServices } = require('../services');
const { productController } = require('../controller');
const {validatePayload} = require('../middleware');
const { schemaOfProduct } = require('../schema');
const productRouter = express.Router();





//Get all products API
productRouter.get('/', productController.getAllProducts);

//Get one product by id API
productRouter.get('/:id', productController.getProductById);

//Create new product API
productRouter.post('/', validatePayload(schemaOfProduct.omit({_id:true})), productController.createProduct);

//Update product API
productRouter.put('/:id',validatePayload(schemaOfProduct), productController.updateProduct); 

//Delete product api
productRouter.delete('/:id', productController.deleteProduct);

module.exports = productRouter;