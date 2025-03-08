const mongoose = require("mongoose");

const { NotFoundError } = require("../error");

const errorHandler = (err,req,res,next)=>{
    if(err instanceof NotFoundError){
        return res.status(400).send(err.message);
    }
    if(err instanceof mongoose.Error.ValidationError){
        return res.status(400).send(err.message);
    }
    console.error(err.stack);
    res.status(500).send("Internal server error !!!")
    next();
};

module.exports = {
    errorHandler,
} 