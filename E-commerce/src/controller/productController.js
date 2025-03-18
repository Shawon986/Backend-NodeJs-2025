const asyncHandler = require("express-async-handler");
const productServices = require("../services/productServices");


const createProduct = asyncHandler(async (req, res) => {
  const newProduct = await productServices.createProduct(req.body);
  res.status(201).json(newProduct);
});

const getAllProducts = asyncHandler(async (req, res) => {
  const products = await productServices.getAllProducts();
  res.json(products);
}); 

const getProductById = asyncHandler(async (req, res) => {
  const product = await productServices.getProductById(req.params.id);
  res.json(product);
});
 
const updateProduct = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  const updatedProduct = await productServices.updateProduct(id, payload);
  res.json(updatedProduct);
});

const deleteProduct = asyncHandler(async (req, res) => {
  const id = req.params.id;
  await productServices.deleteProduct(id);
  res.json({ message: "Product has deleted" });
});

module.exports = {
  createProduct,
  getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};
