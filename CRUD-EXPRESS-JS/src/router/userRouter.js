const express = require('express');
const userRouter = express.Router();
const { v4: uuidv4 } = require('uuid');


//Users data
const users = [
    {
        _id:"001",
        name:"Shawon",
        age :"24",
        gender:"Male",

    },
    {
        _id:"002",
        name:"Shozol",
        age :"29",
        gender:"Male",
    }
];

//Get all users API
userRouter.get('/', (req,res)=>{
    res.send(users);
});


//Create new user API
userRouter.post('/', (req,res)=>{
    const userData = req.body;
    const newUser = {_id: uuidv4(), ...userData}
    users.push(newUser);
    res.status(201).json(newUser); 
});

//Update user API
userRouter.put('/:id', (req,res)=>{
    const user = req.body;
    const { id } = req.params;
    let updatedUserIndex = users.findIndex((user) => user._id === id);
    if(updatedUserIndex === -1){
       return res.status(400).json({message:`No user found with this id : ${id}`});
    }
    
    users[updatedUserIndex] = {...users[updatedUserIndex], ...user};
    res.status(201).json(users[updatedUserIndex]);

});

//Delete user API
userRouter.delete('/:id', (req,res)=>{
    const { id } = req.params;
    let userIndex = users.findIndex((user) => user._id === id);
    if(userIndex === -1){
       return res.status(400).json({message:`No user found with this id : ${id}`});
    }

    users.splice(userIndex,1);
    res.status(201).json({message:"User deleted successfully"});
});


module.exports = userRouter;