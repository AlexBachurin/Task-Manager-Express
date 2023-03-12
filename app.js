const express = require("express");
const app = express();
const tasksRoutes = require("./routes/tasks");

const port = 3000;
// middleware, use this to have data in req.body
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// routes
app.use("/api/v1/tasks", tasksRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port} `);
});
