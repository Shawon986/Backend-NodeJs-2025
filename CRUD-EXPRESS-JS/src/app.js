require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const {configureRouter} = require('./router');
const { logRequestMiddleware, errorHandler } = require('./middleware');


const port = 5000;
const app = express();

const MONGODB_URI = process.env.MONGODB_URI;
const MONGO_DB_NAME = process.env.MONGODB_NAME;

const connectDB = ()=>{
    console.log("Connecting MongoDB .....");
    mongoose.connect(MONGODB_URI,{
        dbName: MONGO_DB_NAME,
    })
    .then(()=>{
        console.log("MONGODB connected successfully");
    }).catch((err)=> console.err(`MONGODB connection failed !!! ${err}`));
};

connectDB();


app.use(express.json());
app.use(logRequestMiddleware);

configureRouter(app);

app.use(errorHandler);

app.listen(port,()=>{
    console.log("App is running on port: 5000"); 
}); 

      