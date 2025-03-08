const express = require("express");
const { productServices } = require("../services");
const { productController } = require("../Controller");
const productRouter = express.Router();

//get all products API
productRouter.get("/", async (req, res) => {
  const products = await productServices.getAllProducts();
  res.json(products);
});

//Create new product API
productRouter.post("/", productController.createNewProduct);

//Update product API
productRouter.put("/:id", (req, res) => {
  const { id } = req.params; 
  const updatedProduct = productServices.updateProduct(id, req.body);
  res.status(201).json(updatedProduct); 
});

//Delete product API
productRouter.delete("/:id", (req, res) => { 
  const { id } = req.params;
  productServices.deleteProduct(id);
  res.json({ message: "Product deleted successfully" });
});

module.exports = productRouter;
