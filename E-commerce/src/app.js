const express = require('express');
const productRouter = require('./router/productRouter');
const app = express();
const port = 9000 ;
app.use(express.json());

app.use(productRouter);

//Connection check API
app.get('/test',(req,res)=>{
    res.send("HI THERE !!!");
});



app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
});

