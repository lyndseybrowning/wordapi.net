'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _catchall = require('./catchall');

var _catchall2 = _interopRequireDefault(_catchall);

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dictionary = _utils2.default.loadDictionary();

var filterRoutes = function filterRoutes(filename) {
  return filename.split('.')[0] === 'route';
};

var initRoute = function initRoute(app, route) {
  var initRouteFile = require('./' + route);

  if (typeof initRouteFile === 'function') {
    initRouteFile(app, dictionary);
  }
};

var routes = {
  init: function init(app) {
    var routeFiles = _fs2.default.readdirSync(__dirname);

    app.get('/', function (req, res) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype');
    });

    routeFiles.filter(filterRoutes).forEach(initRoute.bind(null, app));

    (0, _catchall2.default)(app);
  }
};

exports.default = routes;