import fs from 'fs';
import catchAll from './route.catchall';

const filterRoutes = (filename) => {
  return filename.split('.')[0] === 'route';
};

const initRoute = (app, route) => {
  const initRouteFile = require(`./${route}`);

  if(typeof initRouteFile === 'function') {
    initRouteFile(app);
  }
};

const routes = {
  init(app, callback) {
    const routeFiles = fs.readdirSync(__dirname);
    routeFiles
      .filter(filterRoutes)
      .forEach(initRoute.bind(null, app));

    catchAll(app);
  },
};

export default routes;
