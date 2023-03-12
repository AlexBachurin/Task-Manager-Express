const express = require("express");
const {
  getAllTasks,
  createTask,
  getSingleTask,
  editTask,
  deleteTask,
} = require("../controllers/tasks-controller");

const router = express.Router();

router.get("/", getAllTasks);
router.post("/", createTask);
router.get("/:id", getSingleTask);
router.patch("/:id", editTask);
router.delete("/:id", deleteTask);

module.exports = router;
