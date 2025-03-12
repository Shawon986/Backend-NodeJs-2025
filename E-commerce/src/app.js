require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');


const configureRouter = require('./router');
const {logMiddleWare, errorHandler} = require('./Middleware');


const port = 9000 ;

const app = express();

const MONGO_URI = process.env.MONGO_URI;
const MONGO_DB_NAME = process.env.MONGO_DB_NAME;



const connectDB = ()=>{
    console.log('Connecting to MongoDB');
    mongoose.connect(MONGO_URI, {
        dbName: MONGO_DB_NAME,
    
    })
    .then(()=>{
        console.log('Connected to MongoDB');
    }).catch((err)=>{
        console.error(`Error connecting to MongoDB ${err}`);
    });
};

connectDB();

app.use(express.json());
app.use(logMiddleWare);

configureRouter(app);

app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
});
