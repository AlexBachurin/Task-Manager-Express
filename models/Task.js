const mongoose = require("mongoose");

// task schema
// schema defines the structure of document
const TaskSchema = new mongoose.Schema({
  // basic validation
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name cannot be more than 20 chars"],
  },

  completed: {
    type: Boolean,
    default: false,
  },
});
// task model, model is a wrapper for schema basically
module.exports = mongoose.model("Task", TaskSchema);
