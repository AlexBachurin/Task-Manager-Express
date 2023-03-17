require("./db/connect");
const express = require("express");
const app = express();
const tasksRoutes = require("./routes/tasks");
const connectDb = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const customErrorHandler = require("./middleware/error-handler");

const port = 3000;

//start server and connect to db
const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port} `);
    });
  } catch (error) {}
};
// middleware, use this to have data in req.body
app.use(express.json());
app.use(express.static("./public"));

// routes
app.use("/api/v1/tasks", tasksRoutes);
app.use(notFound);
app.use(customErrorHandler);
// start invoke
start();
