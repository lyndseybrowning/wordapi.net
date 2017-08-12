'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressValidator = require('express-validator');

var _expressValidator2 = _interopRequireDefault(_expressValidator);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _main = require('./routes/main');

var _main2 = _interopRequireDefault(_main);

var _errorHandler = require('./middleware/errorHandler');

var _errorHandler2 = _interopRequireDefault(_errorHandler);

var _customValidators = require('./middleware/customValidators');

var _customValidators2 = _interopRequireDefault(_customValidators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

exports.default = function () {
  app.server = _http2.default.createServer(app);
  app.use('/', _express2.default.static(__dirname + '/public'));
  app.use(_errorHandler2.default);
  app.use((0, _expressValidator2.default)({ customValidators: _customValidators2.default }));
  app.use(_bodyParser2.default.json());
  app.use(_bodyParser2.default.urlencoded({ extended: true }));
  app.set('json spaces', 2);

  _main2.default.init(app);

  return app;
};