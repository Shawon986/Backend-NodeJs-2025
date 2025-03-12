const express = require('express');
const { productController } = require('../controller');

const productRouter = express.Router();



//Get all products API
productRouter.get('/',productController.getAllProducts);

//Get one product by id API
productRouter.get('/:id', productController.getProductById);

//Create new product API
productRouter.post('/', productController.createProduct);

//Update product API
productRouter.put('/:id', productController.updateProduct);

//Delete product api
productRouter.delete('/:id', productController.deleteProduct);

module.exports = productRouter;