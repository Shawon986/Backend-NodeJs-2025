const userServices = require('../services/userServices');

const asyncHandler = require('express-async-handler');

const createUser = asyncHandler(async (req, res) => {
  const user = await userServices.createUser(req.body);
  res.status(201).json(user);
});

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await userServices.getAllUsers();
  res.json(users);
});

const getUserById = asyncHandler(async (req, res) => {
  const user = await userServices.getUserById(req.params.id);
  res.json(user);
});

const updateUser = asyncHandler(async (req, res) => {
  const user = await userServices.updateUser(req.params.id, req.body);
  res.json(user);
});

const deleteUser = asyncHandler(async (req, res) => {
  await userServices.deleteUser(req.params.id);
  res.json({ message: 'User has deleted' });
});

module.exports = {
  createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};
