import http from 'http';
import express from 'express';
import expressValidator from 'express-validator';
import config from './config';
import routes from './routes/main';
import errorHandler from './middleware/errorHandler';
import customValidators from './middleware/customValidators';

const app = express();
const port = process.env.PORT || config.port;

const server = {
  init() {
    app.server = http.createServer(app);
    app.use('/', express.static(`${__dirname}/public`));
    app.use(errorHandler);
    app.use(expressValidator({ customValidators }));
    app.set('json spaces', 2);
    if(!module.parent) {
      app.server.listen(port);
    }
    routes.init(app);

    return app;
  },
};

export default server;
