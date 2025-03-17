const express = require('express');
const { userServices } = require('../services');
const { userController } = require('../controller');
const userRouter = express.Router();

//Get all users API
userRouter.get('/',userController.getAllUsers);

//Get one user by id API
userRouter.get('/:id', userController.getUserById);

//Create new user API
userRouter.post('/',userController.createUser);

//Update user API
userRouter.put('/:id',userController.updateUser);

//Delete user API
userRouter.delete('/:id',userController.deleteUser);


module.exports = userRouter;