const logMiddleware = require('./logMiddleWare');
const productMiddleware = require('./productMiddleware');
const userMiddleware = require('./userMiddleware');
const validatePayload = require('./validationMiddleware');

module.exports = {
  logMiddleware,
  productMiddleware,
  userMiddleware,
  validatePayload
};