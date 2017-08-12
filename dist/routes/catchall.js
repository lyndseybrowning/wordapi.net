'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = catchAll;
function catchAll(app) {
  app.get('/api/*', function (req, res, next) {
    res.status(404).send({
      status: 404,
      message: 'Invalid URL requested: ' + req.url
    });
  });
}