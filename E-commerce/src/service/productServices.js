const {v4: uuidv4} = require('uuid');
const { notFoundError } = require('../errors');
const { Product } = require('../Model');
const products = [
    {
        _id: uuidv4(),
        model: "DJI MINI 2",
        brand: "DJI",
        categories: "Drone",
        price: 2200,
        

    },
    {
        _id: uuidv4(),
        model: "DJI AVATA 2",
        brand: "DJI",
        categories: "Drone",
        price: 4200,
    }
];

const getAllProducts = async() => {
    const products = await Product.find({});
    return products;
};

const getProductById = async(id)=>{
    const product = await Product.findById(id);
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

const deleteProduct = (id)=>{
    const productIndex = products.findIndex((product)=>product._id===id);
    if(productIndex === -1){
        throw new notFoundError(`No product has found with this id ${id}`);
    }
    products.splice(productIndex, 1);
    return true;
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};