const express = require("express");
const { productServices } = require("../services");
const productRouter = express.Router();

//get all products API
productRouter.get("/", (req, res) => {
  res.send(productServices.getAllProducts());
});

//Create new product API
productRouter.post("/", (req, res) => {
  res.status(201).json(productServices.createNewProduct(req.body));
});

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
