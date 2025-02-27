const express = require('express');
const productsRouter = express.Router();
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


productsRouter.get('/status', (req,res)=>{
    res.send("OK")
});

productsRouter.get('/api/products', (req,res)=>{
    res.send(products);
});



productsRouter.post('/api/products', (req,res)=>{
    const newProductData = req.body;
    const newProduct = {_id: uuidv4(),...newProductData}; 
    products.push(newProduct);
    res.status(201).json(newProduct);
});

productsRouter.put('/api/products/:id', (req,res)=>{
    const {id} = req.params;
    const payload = req.body;

    let updatedProductIndex = products.findIndex((products)=> products._id == id);
    if(updatedProductIndex === -1){
        return res.status(400).json({message:`No product found by id ${id}`})
    }
    // res.json({message:"Product updated successfully"});
    products[updatedProductIndex] = {...products[updatedProductIndex], ...payload};

    res.status(201).json(products[updatedProductIndex]);
     
});

productsRouter.delete('/api/products/:id', (req,res)=>{
    const {id} = req.params;
    let updatedProductIndex = products.findIndex((products)=> products._id == id);
    if(updatedProductIndex === -1){
        return res.status(400).json({message:`No product found by id ${id}`})
    }
    products.splice(updatedProductIndex,1);
    res.status(201).json({message:"Product deleted successfully"});
})

module.exports = productsRouter;