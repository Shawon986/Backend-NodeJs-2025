
const asyncHandler = require("express-async-handler");

const { productServices } = require("../services")

const createNewProduct = asyncHandler (async (req,res)=>{
    
    const newProduct = await productServices.createNewProduct(req.body);
    res.status(201).json(newProduct);
    
});

module.exports = {
    createNewProduct,
}