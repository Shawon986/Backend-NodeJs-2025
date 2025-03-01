const express = require('express');
const app = express();
const port = 5000;
const { v4: uuidv4 } = require('uuid');
app.use(express.json());

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

//Check connection API
app.get('/test', (req,res)=>{
    res.send("HI THERE");
});

//Get all users API
app.get('/api/users', (req,res)=>{
    res.send(users);
});


//Create new user API
app.post('/api/users', (req,res)=>{
    const userData = req.body;
    const newUser = {_id: uuidv4(), ...userData}
    users.push(newUser);
    res.status(201).json(newUser); 
});

//Update user API
app.put('/api/users/:id', (req,res)=>{
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
app.delete('/api/users/:id', (req,res)=>{
    const { id } = req.params;
    let userIndex = users.findIndex((user) => user._id === id);
    if(userIndex === -1){
       return res.status(400).json({message:`No user found with this id : ${id}`});
    }

    users.splice(userIndex,1);
    res.status(201).json({message:"User deleted successfully"});
});
 






app.listen(port,()=>{
    console.log("App is running on port: 5000");
});