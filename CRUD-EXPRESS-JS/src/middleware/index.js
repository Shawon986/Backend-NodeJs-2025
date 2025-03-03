const {logRequestMiddleware} = require('./logMiddleware');

const productMiddleware = (req, res, next)=>{
    console.log("Someone requested the product route", req.method, req.url);
    next();
}
module.exports = {
    logRequestMiddleware,
    productMiddleware,
};