require('dotenv').config();

const config = {
    PORT : process.env.PORT,
    db:{
        MONGODB_URI : process.env.MONGODB_URI,
        MONGODB_NAME : process.env.MONGODB_NAME,
    }
};


module.exports = config;