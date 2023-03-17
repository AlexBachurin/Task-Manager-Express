const { CustomError } = require("../errors/CustomError");

const customErrorHandler = (err, req, res, next) => {
  //  if error is our custom error, then display message and status code using this class
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({ msg: err.message });
};

module.exports = customErrorHandler;
