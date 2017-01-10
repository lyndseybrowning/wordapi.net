import http from 'http';
import express from 'express';
import config from './config';

const app = express();
const port = process.env.PORT || config.port;

const server = {
  init(dictionary) {
    app.server = http.createServer(app);
    app.use('/', express.static(`${__dirname}/public`));
    app.server.listen(port);
  }
};

export default server;
