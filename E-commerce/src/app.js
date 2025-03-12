require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const configureRouter = require('./router');

const {logMiddleWare, errorHandler} = require('./Middleware');
const app = express();

app.use(express.json());

const port = 9000 ;


app.use(logMiddleWare);


configureRouter(app);

app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
});
