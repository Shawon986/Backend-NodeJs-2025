const express = require('express');
const {v4: uuidv4} = require('uuid');

const userRouter = express.Router();

const users = [
    {
        _id: uuidv4(),
        name: "John",
        email: "john@gmail.com",
        password: "123456",
    },
    {
        _id: uuidv4(),
        name: "Doe",
        email: "doe@gmail.com",
        password:"123456",
    }
];

//Get all users API
userRouter.get('/',(req,res)=>{
    res.send(users);
});

//Get one user by id API
userRouter.get('/:id', (req,res)=>{
    const id = req.params.id;
    const user = users.find((user)=> user._id ===id);
    if(!user){
        res.send(`No user has found with this id ${id}`);
    }
    res.send(user);
});

//Create new user API
userRouter.post('/',(req,res)=>{
    const payload= req.body;
    const newUser = {_id: uuidv4(), ...payload};
    users.push(newUser);
    res.status(201).json(newUser);
});

//Update user API
userRouter.put('/:id',(req,res)=>{
    const id = req.params.id;
    const payload = req.body;
    const userIndex = users.findIndex((user)=>user._id === id);
    if(userIndex === -1){
        res.status(404).send({message:`No user found with this id ${id}`});
    }
    users[userIndex] = {...users[userIndex], ...payload};
    res.json(users[userIndex]);
});



module.exports = userRouter;