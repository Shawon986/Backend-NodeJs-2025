const {logMiddleWare} = require('./logMiddleWare');

const productRouteMiddleware = (req, res, next) => {
    console.log(`Someone is trying to access product route with method ${req.method}`);
    next();
};

module.exports = {
    logMiddleWare,
    productRouteMiddleware,
};  