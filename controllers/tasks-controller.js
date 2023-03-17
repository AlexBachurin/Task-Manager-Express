const Task = require("../models/Task");
const asyncWrapper = require("../middleware/asyncWrapper");
const { createCustomError } = require("../errors/CustomError");

//get All tasks
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

//get Single task
const getSingleTask = asyncWrapper(async (req, res, next) => {
  // get id from request params
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });
  // if id is wrong we get task as null, so check for task
  if (!task) {
    return next(createCustomError(`No task with id of ${taskId}`, 404));
    // return res.status(404).json({ msg: `No task with id of ${taskId}` });
  }
  res.status(200).json({ task });
});

//POST to create task
const createTask = asyncWrapper(async (req, res) => {
  // handle error when creating task

  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

// PATCH to edit task
const editTask = asyncWrapper(async (req, res) => {
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
    return next(createCustomError(`No task with id of ${taskId}`, 404));
  }
  res.status(200).json({ task });
});

// DELETE to delete task
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });
  if (!task) {
    return next(createCustomError(`No task with id of ${taskId}`, 404));
  }
  // res.status(200).json({ task });
  res.status(200).send("delete successful");
});

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  editTask,
  deleteTask,
};
