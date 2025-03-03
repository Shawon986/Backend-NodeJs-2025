const { v4: uuidv4 } = require('uuid');

//Products data
const products = [
    {
        id:"111",
        name: "16 pro max",
        brand: "iphone",
        price: "8500 rmb",
    },
    {
        id:"222",
        name: "14 pro max",
        brand: "iphone",
        price: "5500 rmb",
    }
];

const getAllProducts = ()=> products;


module.exports = {
    getAllProducts,

}