'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _server = require('./server');

var _server2 = _interopRequireDefault(_server);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _server2.default)();
var port = process.env.PORT || _config2.default.port;

app.server.listen(port);

exports.default = app;