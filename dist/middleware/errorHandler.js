'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var errorHandler = function errorHandler(err, req, res, next) {
  var env = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : process.env.NODE_ENV;

  var handler = {
    message: err.message,
    error: env === 'production' ? {} : err.stack
  };

  res.status(err.status || 500).send(handler);
};

exports.default = errorHandler;