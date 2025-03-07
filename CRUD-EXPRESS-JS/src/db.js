const config  = require('./config');
const mongoose = require('mongoose');

const connectDB = async ()=>{
    console.log("Connecting MongoDB .....");
    try {
        await mongoose.connect(config.db.MONGODB_URI,{
            dbName: config.db.MONGODB_NAME,
        });
        console.log("MONGODB connected successfully");

        
    } catch (error) {
        console.err(`MONGODB connection failed !!! ${error}`)
    }
    
};

module.exports = connectDB;