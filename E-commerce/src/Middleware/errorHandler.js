const { notFoundError } = require("../errors");
const mongoose = require('mongoose');

const errorHandler = (err, req, res, next)=>{
    if (err instanceof notFoundError){
        return res.status(404).send(err.message);
    }
    if(err instanceof mongoose.Error.ValidationError || err instanceof mongoose.Error.CastError){
        return res.status(404).send(err.message);
    }
    console.log(err.stack);
    res.status(500).send("Internal server error");
}

module.exports = {
    errorHandler,
}