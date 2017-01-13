import fs from 'fs';

function initRoute(app, route) {
  const _route = require(`./${route}`);

  if(typeof _route === 'function') {
    _route(app);
  }
}

function filterRoutes(filename) {
  return filename[0] === '_';
}

function initCatchAllRoute(app) {
  app.get('/api/*', (req, res, next) => {
    res.send({
      status: 404,
      message: `Invalid URL requested: ${req.url}`
    });
  });
}

const routes = {
  init(app, callback) {
    const routeFiles = fs.readdirSync(__dirname);
    routeFiles
      .filter(filterRoutes)
      .forEach(initRoute.bind(null, app));

    initCatchAllRoute(app);
  }
};

export default routes;
