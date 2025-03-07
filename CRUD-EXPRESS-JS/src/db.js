const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;
const MONGO_DB_NAME = process.env.MONGODB_NAME;


const connectDB = async ()=>{
    console.log("Connecting MongoDB .....");
    try {
        await mongoose.connect(MONGODB_URI,{
            dbName: MONGO_DB_NAME,
        });
        console.log("MONGODB connected successfully");

        
    } catch (error) {
        console.err(`MONGODB connection failed !!! ${error}`)
    }
    
};

module.exports = connectDB;