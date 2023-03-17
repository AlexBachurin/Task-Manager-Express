const Task = require("../models/Task");

//get All tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ error });
  }
};
//get Single task
const getSingleTask = async (req, res) => {
  try {
    // get id from request params
    const { id: taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });
    // if id is wrong we get task as null, so check for task
    if (!task) {
      return res.status(404).json({ msg: `No task with id of ${taskId}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ error });
  }
  // res.json({ id });
};
//POST to create task
const createTask = async (req, res) => {
  // handle error when creating task
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    // at this point just send back response as server error if there is an error
    res.status(500).json({ error });
  }
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
