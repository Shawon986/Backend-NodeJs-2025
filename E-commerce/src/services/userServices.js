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
        throw new Error(`No user found with this id ${id}`);
    }
    return user;
};

const createUser = (payload)=>{
    const newUser = {_id: uuidv4(), ...payload};
    users.push(newUser);
    return newUser;
};

const updateUser = (id,payload)=>{
    const userIndex = users.findIndex((user)=>user._id === id);
    if(userIndex === -1){
        throw new Error(`No user found with this id ${id}`);
    }
    users[userIndex] = {...users[userIndex], ...payload};
    return users[userIndex];
};

const deleteUser = (id)=>{
    const userIndex = users.findIndex((user)=>user._id === id);
    if(userIndex === -1){
        throw new Error(`No user found with this id ${id}`);
    }
    users.splice(userIndex,1);
    return users;
};

module.exports ={
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}