// class for custom error
class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

//function to create our custom error
const createCustomError = (message, statusCode) => {
  // just return instance of our CustomError class
  return new CustomError(message, statusCode);
};

module.exports = { createCustomError, CustomError };
