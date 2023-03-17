const Task = require("../models/Task");

//get All tasks
const getAllTasks = (req, res) => {
  res.send("get All Tasks");
};
//get Single task
const getSingleTask = (req, res) => {
  res.send("get single task");
};
//POST to create task
const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};
// PATCH to edit task
const editTask = (req, res) => {
  res.send("Edit task");
};
// DELETE to delete task
const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  editTask,
  deleteTask,
};
