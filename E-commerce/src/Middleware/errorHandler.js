const { notFoundError } = require("../errors");


const errorHandler = (err, req, res, next)=>{
    if (err instanceof notFoundError){
        return res.status(404).send(err.message);
    }
    console.log(err.stack);
    res.status(500).send("Internal server error");
}

module.exports = {
    errorHandler,
}