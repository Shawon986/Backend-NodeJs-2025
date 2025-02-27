const express = require('express');
const userRoute = express.Router();


userRoute.get('/api/users', (req,res)=>{
    res.json("HI THERE");
})


module.exports = userRoute;