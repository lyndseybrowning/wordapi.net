import fs from 'fs';

const filterRoutes = (filename) => {
  return filename.split('.')[0] === 'route';
};

const initRoute = (app, route) => {
  const initRouteFile = require(`./${route}`);

  if(typeof initRouteFile === 'function') {
    initRouteFile(app);
  }
};

const initCatchAllRoute = (app) => {
  app.get('/api/*', (req, res, next) => {
    res.status(404).send({
      status: 404,
      message: `Invalid URL requested: ${req.url}`,
    });
  });
};

const routes = {
  init(app, callback) {
    const routeFiles = fs.readdirSync(__dirname);
    routeFiles
      .filter(filterRoutes)
      .forEach(initRoute.bind(null, app));

    initCatchAllRoute(app);
  },
};

export default routes;
