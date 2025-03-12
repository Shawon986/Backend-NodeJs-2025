const { productServices } = require("../service");

const createProduct = async (req,res)=>{    
    try{
        const newProduct = await productServices.createProduct(req.body);
        res.status(201).json(newProduct);
    }catch(error){
        res.status(400).send({message:error.message});
    }
};

module.exports = {
    createProduct,
};  