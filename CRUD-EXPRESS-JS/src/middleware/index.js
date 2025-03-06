const {logRequestMiddleware} = require('./logMiddleware');
const {errorHandler} = require('./errorHandler');

//Middleware for product route
const productMiddleware = (req, res, next)=>{
    console.log("Someone requested the product route", req.method, req.url);
    next();
};

//Middleware for user route 
const userMiddleware = (req,res, next)=>{
    console.log("Someone requested the user route", req.method, req.url);
    next();
}
module.exports = {
    logRequestMiddleware,
    productMiddleware, 
    userMiddleware,
    errorHandler,
}; 