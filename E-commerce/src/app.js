const express = require('express');
const app = express();
const port = 9000 ;
app.use(express.json());

const products = [
    {
        _id: 101,
        model: "DJI MINI 2",
        brand: "DJI",
        categories: "Drone",
        price: 2200,
        

    },
    {
        _id: 102,
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



app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
})