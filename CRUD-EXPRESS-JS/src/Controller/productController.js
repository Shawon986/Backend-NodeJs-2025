
const asyncHandler = require("express-async-handler");

const { productServices } = require("../services")

const createNewProduct = asyncHandler (async (req,res)=>{
    
    const newProduct = await productServices.createNewProduct(req.body);
    res.status(201).json(newProduct);
    
});

const getAllProducts = asyncHandler(async (req,res)=>{
    const products = await productServices.getAllProducts();
    res.json(products);
});


const updateProduct = asyncHandler(async (req,res)=>{
    const { id } = req.params;
    const updatedProduct = await productServices.updateProduct(id, req.body);
    res.status(201).json(updatedProduct);
});

module.exports = {
    createNewProduct,
    getAllProducts,
    updateProduct,
}