import fs from 'fs';
import catchAll from './catchall';
import utils from '../utils';

const dictionary = utils.loadDictionary();

const filterRoutes = (filename) => {
  return filename.split('.')[0] === 'route';
};

const initRoute = (app, route) => {
  const initRouteFile = require(`./${route}`);

  if (typeof initRouteFile === 'function') {
    initRouteFile(app, dictionary);
  }
};

const routes = {
  init(app) {
    const routeFiles = fs.readdirSync(__dirname);

    app.get('/', (req, res) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); 
      res.setHeader(
        'Access-Control-Allow-Headers', 
        'X-Requested-With,contenttype'
      );
    });
    
    routeFiles
      .filter(filterRoutes)
      .forEach(initRoute.bind(null, app));

    catchAll(app);
  },
};

export default routes;
