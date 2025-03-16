const { NotFoundError } = require("../errors");



const errorHandler = (err, req, res, next) => {
    if(err instanceof NotFoundError){
        return res.status(404).send(err.message);
    }
    console.error(err.stack);
    res.status(500).send('Internal Server Error!');
    
};


module.exports = {
    errorHandler,
};