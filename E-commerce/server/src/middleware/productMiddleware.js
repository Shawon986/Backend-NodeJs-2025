const productRequestMiddleware = (req, res, next) => {
  console.log(` Someone requested this product method : ${req.method}`);
  next();
};


module.exports = productRequestMiddleware;