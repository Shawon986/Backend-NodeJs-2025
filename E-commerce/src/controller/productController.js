const asyncHandler = require('express-async-handler');
const { productServices } = require("../service");

const createProduct = asyncHandler( async (req,res)=>{    
    
    const newProduct = await productServices.createProduct(req.body);
    res.status(201).json(newProduct);
   
});

const getAllProducts = asyncHandler( async (req,res)=>{
    const products = await productServices.getAllProducts();
    res.json(products);
});

const getProductById = asyncHandler( async (req,res)=>{
    const product = await productServices.getProductById(req.params.id);
    res.json(product);
});

const updateProduct = asyncHandler( async (req,res)=>{
    const id = req.params.id;
    const updatedProduct = await productServices.updateProduct(id, req.body);
    res.json(updatedProduct);
});

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
};  