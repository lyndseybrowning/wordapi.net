import fs from 'fs';

function initRoute(app, route) {
  require(`./${route}`)(app);
}

function filterRoutes(filename) {
  return filename[0] === '_';
}

const routes = {
  init(app) {
    fs.readdir(__dirname, (err, files) => {
      files
        .filter(filterRoutes)
        .forEach(initRoute.bind(null, app));
    });
  }
};

export default routes;
