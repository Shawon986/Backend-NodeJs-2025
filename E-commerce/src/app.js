const express = require('express');
const {v4: uuidv4} = require('uuid');
const app = express();
const port = 9000 ;
app.use(express.json());

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
]

//Connection check API
app.get('/test',(req,res)=>{
    res.send("HI THERE !!!");
});

//Get all products API
app.get('/api/products',(req,res)=>{
    res.send(products);
});

//Get one product by id API
app.get('/api/products/:id', (req,res)=>{
    const id = req.params.id;
    const product = products.find((product)=> product._id ===id);
    if(!product){
        res.send(`No product has found with this id ${id}`);
    }
    res.send(product);
});

//Create new product API
app.post('/api/products', (req,res)=>{
    let {payload} = req.body;
    const newProduct = {_id: uuidv4(), ...payload};
    products.push(newProduct);
    res.status(201).json(newProduct);

});

//Update product API
app.put('/api/products/:id', (req,res)=>{
    const id = req.params.id;
    const payload = req.body;
    const productIndex = products.findIndex((product)=>product._id===id);
    if(productIndex === -1){
        return res.status(404).send(`No product has found with this id ${id}`);
    }
    products[productIndex] = { ...products[productIndex], ...payload};
    res.json(products[productIndex]);
});


app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
})