const express = require('express');
const { userServices } = require('../services');
const userRouter = express.Router();

//Get all users API
userRouter.get('/',(req,res)=>{
    res.send(userServices.getAllUsers());
});

//Get one user by id API
userRouter.get('/:id', (req,res)=>{
    res.send(userServices.getUserById(req.params.id));
});

//Create new user API
userRouter.post('/',(req,res)=>{
    res.status(201).json(userServices.createUser(req.body));
});

//Update user API
userRouter.put('/:id',(req,res)=>{
    const id = req.params.id;
    const user = userServices.updateUser(id,req.body);
    res.json(user);
});

//Delete user API
userRouter.delete('/:id',(req,res)=>{
    const id = req.params.id;
    const userIndex = users.findIndex((user)=>user._id === id);
    if(userIndex === -1){
        res.status(404).send({message:`No user found with this id ${id}`});
    }
    users.splice(userIndex,1);
    res.json({message: "User has deleted"});
})


module.exports = userRouter;