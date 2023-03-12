//get All tasks
const getAllTasks = (req, res) => {
  res.send("get All Tasks");
};
//get Single task
const getSingleTask = (req, res) => {
  res.send("Create task");
};
//POST to create task
const createTask = (req, res) => {
  res.send("Create task");
};
// PATCH to edit task
const editTask = (req, res) => {
  res.send("Edit task");
};
// DELETE to delete task
const deleteTask = (req, res) => {
  res.send("Create task");
};

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  editTask,
  deleteTask,
};
