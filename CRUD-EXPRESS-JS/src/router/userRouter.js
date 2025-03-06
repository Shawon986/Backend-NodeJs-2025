const express = require("express");
const { userServices } = require("../services");
const userRouter = express.Router();

//Get all users API
userRouter.get("/", (req, res) => {
  res.send(userServices.getAllUsers());
});

//Create new user API
userRouter.post("/", (req, res) => {
  res.status(201).json(userServices.createUser(req.body));
});

//Update user API
userRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  const updatedUser = userServices.updateUser(id, req.body);
  res.status(201).json(updatedUser); 
});

//Delete user API
userRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  userServices.deleteUser(id);
  res.status(201).json({ message: "User deleted successfully" });
});

module.exports = userRouter;
