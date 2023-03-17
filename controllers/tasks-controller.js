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
const editTask = async (req, res) => {
  try {
    // id with which we find task which we need to update
    const { id: taskId } = req.params;
    // grab data from frontend request with properties which to update
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
      // return new item in response which is already updated
      new: true,
      // run validators in schema
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: `No task with id of ${taskId}` });
    }
    res.status(200).json({ id: taskId, data: req.body });
  } catch (error) {
    res.status(500).json({ error });
  }
};
// DELETE to delete task
const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskId });
    if (!task) {
      return res.status(404).json({ msg: `No task with id of ${taskId}` });
    }
    // res.status(200).json({ task });
    res.status(200).send();
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  editTask,
  deleteTask,
};
