import fs from 'fs';

function initRoute(app, callback, route) {
  require(`./${route}`)(app);
  return callback(app);
}

function filterRoutes(filename) {
  return filename[0] === '_';
}

function initInvalidRoutes(app) {
  app.get('/api/*', (req, res, next) => {
    res.send({
      status: 404,
      message: `Invalid URL requested: ${req.url}`
    });
  });
}

const routes = {
  init(app, callback) {
    fs.readdir(__dirname, (err, files) => {
      files
        .filter(filterRoutes)
        .forEach(initRoute.bind(null, app, initInvalidRoutes));
    });
  }
};

export default routes;
