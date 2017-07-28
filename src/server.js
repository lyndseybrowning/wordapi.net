import http from 'http';
import express from 'express';
import expressValidator from 'express-validator';
import bodyParser from 'body-parser';
import routes from './routes/main';
import errorHandler from './middleware/errorHandler';
import customValidators from './middleware/customValidators';

const app = express();

export default () => {
  app.server = http.createServer(app);
  app.use('/', express.static(`${__dirname}/public`));
  app.use(errorHandler);
  app.use(expressValidator({ customValidators }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.set('json spaces', 2);

  routes.init(app);

  return app;
};
