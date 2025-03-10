const express = require('express');
const {v4: uuidv4} = require('uuid');


const productRouter = express.Router();

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

//Get all products API
productRouter.get('/',(req,res)=>{
    res.send(products);
});

//Get one product by id API
productRouter.get('/:id', (req,res)=>{
    const id = req.params.id;
    const product = products.find((product)=> product._id ===id);
    if(!product){
        res.send(`No product has found with this id ${id}`);
    }
    res.send(product);
});

//Create new product API
productRouter.post('/', (req,res)=>{
    let {payload} = req.body;
    const newProduct = {_id: uuidv4(), ...payload};
    products.push(newProduct);
    res.status(201).json(newProduct);

});

//Update product API
productRouter.put('/:id', (req,res)=>{
    const id = req.params.id;
    const payload = req.body;
    const productIndex = products.findIndex((product)=>product._id===id);
    if(productIndex === -1){
        return res.status(404).send(`No product has found with this id ${id}`);
    }
    products[productIndex] = { ...products[productIndex], ...payload};
    res.json(products[productIndex]);
});

//Delete product api
productRouter.delete('/:id',(req,res)=>{
    const id = req.params.id;
    const productIndex = products.findIndex((product)=>product._id===id);
    if(productIndex === -1){
        return res.status(404).send(`No product has found with this id ${id}`);
    }
    products.splice(productIndex,1);
    res.json({ message:"Product has deleted" });
});

module.exports = productRouter;