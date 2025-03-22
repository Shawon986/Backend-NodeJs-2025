require('dotenv').config();

const config = {
  PORT: process.env.PORT,
  db: {
    MONGODB_URI: process.env.MONGODB_URI,
    DB_NAME: process.env.DB_NAME,
  },
  
};

module.exports = {config};