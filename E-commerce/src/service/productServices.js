const {v4: uuidv4} = require('uuid');
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

const getAllProducts = () => products;

const getProductById = (id)=>{
    const product = products.find((product)=> product._id ===id);
    if(!product){
        throw new Error(`No product has found with this id ${id}`);
    }
    return product;
};

const createProduct = (payload)=>{
    const newProduct = {_id: uuidv4(), ...payload};
    products.push(newProduct);
    return newProduct;
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
};