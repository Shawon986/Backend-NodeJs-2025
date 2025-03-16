require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { configureRouter } = require('./router');
const { logMiddleware } = require('./middleware');
const { errorHandler } = require('./middleware/errorHandler');
const app = express();
const MONGO_Db_URI = process.env.MONGODB_URI;
const MONGO_DB_NAME = process.env.DB_NAME;



const connectDb = ()=>{
    console.log("Connecting to MongoDB");
    mongoose.connect(MONGO_Db_URI,{
        dbName: MONGO_DB_NAME,
    }).then(()=>{
        console.log("MongoDb Connected")
    }).catch((error)=>{
        console.error("Connection Failed")
    });
};

connectDb();



app.use(express.json());
app.use(logMiddleware);

const port =  process.env.PORT;

configureRouter(app);

app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
});

