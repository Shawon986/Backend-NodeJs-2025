const express = require("express");
const { productServices } = require("../services");
const { productController } = require("../Controller");
const productRouter = express.Router();

//get all products API
productRouter.get("/", productController.getAllProducts);

//get product by id API
productRouter.get("/:id", productController.getProductById);

//Create new product API
productRouter.post("/", productController.createNewProduct);

//Update product API
productRouter.put("/:id", productController.updateProduct);

//Delete product API
productRouter.delete("/:id", (req, res) => { 
  const { id } = req.params;
  productServices.deleteProduct(id);
  res.json({ message: "Product deleted successfully" });
});

module.exports = productRouter;
