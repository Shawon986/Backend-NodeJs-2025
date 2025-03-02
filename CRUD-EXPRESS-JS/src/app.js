const express = require('express');
const app = express();
const port = 5000;
const {userRouter} = require('./router');
app.use(express.json());


//Check connection API
app.get('/test', (req,res)=>{
    res.send("HI THERE");
});

app.use('/api/users', userRouter);


app.listen(port,()=>{
    console.log("App is running on port: 5000");
});