const mongoose = require('mongoose');


const MONGO_URI = process.env.MONGO_URI;
const MONGO_DB_NAME = process.env.MONGO_DB_NAME;

const connectDB = async()=>{
    console.log('Connecting to MongoDB');
    try {
        await mongoose.connect(MONGO_URI, {
            dbName: MONGO_DB_NAME,
        })
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(`Error connecting to MongoDB ${error}`);

    }
};

module.exports = {
  connectDB,
};