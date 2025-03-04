const { v4: uuidv4 } = require("uuid");

//Users data
const users = [
  {
    _id: "001",
    name: "Shawon",
    age: "24",
    gender: "Male",
  },
  {
    _id: "002",
    name: "Shozol",
    age: "29",
    gender: "Male",
  },
];

const getAllUsers = () => users;

const createUser = (userData) => {
  const newUser = { _id: uuidv4(), ...userData };
  users.push(newUser);
  return newUser;
};

const updateUser = (id, user) => {
  let updatedUserIndex = users.findIndex((user) => user._id === id);
  if (updatedUserIndex === -1) {
    throw new Error(`No user found with this id : ${id}`);
  }

  users[updatedUserIndex] = { ...users[updatedUserIndex], ...user };
  return users[updatedUserIndex];
};

const deleteUser = (id) => {
  let userIndex = users.findIndex((user) => user._id === id);
  if (userIndex === -1) {
    throw new Error(`No user found with this id : ${id}`);
  }

  users.splice(userIndex, 1);
  return true;
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};
