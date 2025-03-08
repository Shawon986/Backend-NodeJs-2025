const { productServices } = require("../services")

const createNewProduct = async (req,res)=>{
    try {
        const newProduct = await productServices.createNewProduct(req.body);
        res.status(201).json(newProduct)
    } catch (error) {
        res.status(400).json({message:error.message});
    }
}

module.exports = {
    createNewProduct,
}