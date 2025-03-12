const asyncHandler = require('express-async-handler');
const { productServices } = require("../service");

const createProduct = asyncHandler( async (req,res)=>{    
    
    const newProduct = await productServices.createProduct(req.body);
    res.status(201).json(newProduct);
   
});

module.exports = {
    createProduct,
};  