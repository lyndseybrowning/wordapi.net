import http from 'http';
import express from 'express';
import config from './config';
import routes from './routes/main';

const app = express();
const port = process.env.PORT || config.port;

const server = {
  init() {
    app.server = http.createServer(app);
    app.use('/', express.static(`${__dirname}/public`));
    app.server.listen(port);
    routes.init(app);
  }
};

export default server;
