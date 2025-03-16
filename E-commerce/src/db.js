
const config  = require('./config/config');
const mongoose = require('mongoose');


const connectDb = async ()=>{
    console.log("Connecting to MongoDB");
    try {
        await mongoose.connect(config.db.MONGODB_URI,{
            dbName: config.db.DB_NAME,
        })
        console.log("Connected to MongoDB");

    } catch (error) {
        console.error("Connection Failed");
        
    }
};

module.exports = {
  connectDb,
};