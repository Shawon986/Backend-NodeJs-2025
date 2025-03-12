
const { notFoundError } = require('../errors');
const { Product } = require('../Model');


const getAllProducts = async() => {
    const products = await Product.find({deleted: false});
    return products;
};

const getProductById = async(id)=>{
    const product = await Product.findById(id, {deleted: false});
    if(!product){
        throw new notFoundError(`No product has found with this id ${id}`);
    }
    return product;
};

const createProduct = async (payload)=>{
    const newProduct = new Product(payload);
    await newProduct.save();
    return newProduct;
};

const updateProduct = async(id, payload)=>{
    return await Product.findByIdAndUpdate({_id:id}, payload);
};   

const deleteProduct = async(id)=>{
    await Product.findOneAndUpdate({_id:id}, {deleted:true, deletedAt: new Date()});
    
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};