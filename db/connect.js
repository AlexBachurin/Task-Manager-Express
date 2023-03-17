const mongoose = require("mongoose");

// function that connects to atlas db
const connectDB = (url) => {
  return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => console.log("connected to database..."))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
