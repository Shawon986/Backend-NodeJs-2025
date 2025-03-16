const {v4: uuidv4} = require('uuid');
const { NotFoundError } = require('../errors');
const { Product } = require('../model');

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
    const products = await Product.find({deleted: false});
    return products;
};

const getProductById = async(id) => {
    const product = await Product.findById(id, {deleted: false});
    if (!product) {
        throw new NotFoundError(`No product has found with this id ${id}`);
    }
    return product;
};

const createProduct = async(payload) => {
    const newProduct = new Product(payload);
    await newProduct.save();
    return newProduct;
};

const updateProduct = async(id, payload) => {
    return await Product.findByIdAndUpdate({_id:id}, payload);

};

const deleteProduct =async (id) => {
    return await Product.findByIdAndUpdate({_id:id}, {deleted:true, deletedAt: new Date()});
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};

