const {v4: uuidv4} = require('uuid');


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

const getAllUsers = ()=> users;

const getUserById = (id)=> {
    const user = users.find((user)=> user._id ===id);
    if(!user){
        res.send(`No user has found with this id ${id}`);
    }
    return user;
};

const createUser = (payload)=>{
    const newUser = {_id: uuidv4(), ...payload};
    users.push(newUser);
    return newUser;
};

module.exports ={
    getAllUsers,
    getUserById,
    createUser,
}