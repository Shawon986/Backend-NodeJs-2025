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


app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
})