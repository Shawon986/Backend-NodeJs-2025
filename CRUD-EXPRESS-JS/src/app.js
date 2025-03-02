const express = require('express');
const app = express();
const port = 5000;
const userRouter = require('./router/userRouter');
app.use(express.json());


//Check connection API
app.get('/test', (req,res)=>{
    res.send("HI THERE");
});

app.use(userRouter);


app.listen(port,()=>{
    console.log("App is running on port: 5000");
});