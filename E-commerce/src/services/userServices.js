const {v4: uuidv4} = require('uuid');
const { NotFoundError } = require('../errors');
const { User } = require('../model');


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

const getAllUsers = async()=> {
    const users = await User.find({deleted: false});
    return users;
};

const getUserById = async (id)=> {
    const user = await User.findOne({_id: id, deleted: false});
    if(!user){
        throw new NotFoundError(`No user found with this id ${id}`);
    }
    return user;
};

const createUser = async(payload)=>{
    const newUser = new User(payload);
    await newUser.save();
    return newUser;
};

const updateUser =async (id,payload)=>{
    const user = await User.findOneAndUpdate({_id: id, deleted: false}, payload);
    if(!user){
        throw new NotFoundError(`No user found with this id ${id}`);
    }
    return user;

};

const deleteUser =async (id)=>{
    const user = await User.findOneAndUpdate({_id: id, deleted: true, deletedAt: new Date()});
    if(!user){
        throw new NotFoundError(`No user found with this id ${id}`);
    }
    return user;
};

module.exports ={
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}