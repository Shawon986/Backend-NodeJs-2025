
const { v4: uuidv4 } = require('uuid');
const products = [
    {   
        "_id": "944459b3-7413-4b6a-ad1b-24285b5eecbe",
        "name": "Sony",
        "model": "Xperia 1 vi",
        "color": "Off white",
        "price": "5600 rmb",
    },
    {   
        "_id": "21b2834a-bd3a-4652-88f0-439a7c2b5636",
        "name": "Iphone",
        "model": "16 pro max",
        "color": "Purple",
        "price": "9000 rmb",
    },
]; 

const getAllProducts = ()=> products;

const createNewProduct = (productPayload)=>{
    const newProduct = {_id: uuidv4(),...productPayload}; 
    products.push(newProduct);
    return newProduct;
}

module.exports = {
    getAllProducts,
    createNewProduct,
}