const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // Wrong MongoDB ID error
  if (err.name === "CastError") {
    err.message = `Resource not found. Invalid ID: ${err.path}`;
    err.statusCode = 400;
  }

  // Duplicate key error (MongoDB Unique Constraint Violation)
  if (err.code === 11000) {
    err.message = `Duplicate key entered: ${Object.keys(err.keyValue).join(", ")}`;
    err.statusCode = 400;
  }

  // Invalid JWT token
  if (err.name === "JsonWebTokenError") {
    err.message = "Invalid authentication token, please try again later";
    err.statusCode = 400;
  }

  // Expired JWT token
  if (err.name === "TokenExpiredError") {
    err.message = "Your authentication token has expired, please log in again";
    err.statusCode = 400;
  }

  // Ensure `ErrorHandler` is used properly
  if (!(err instanceof ErrorHandler)) {
    err = new ErrorHandler(err.message, err.statusCode);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
