const mongoose = require("mongoose");
const { NotFoundError } = require("../errors");
const {z} = require('zod');



const errorHandler = (err, req, res, next) => {
    if(err instanceof z.ZodError){
        return res.status(400).send(err.message);
    }
    if(err instanceof NotFoundError){
        return res.status(404).send(err.message);
    }
    if(err instanceof mongoose.Error.ValidationError || err instanceof mongoose.Error.CastError){
        return res.status(400).send(err.message);
    }
    console.error(err.stack);
    res.status(500).send('Internal Server Error!');
    
};


module.exports = {
    errorHandler,
};