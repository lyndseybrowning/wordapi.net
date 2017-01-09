import http from 'http';
import express from 'express';
import config from './config';
import dictionary from './dictionary';

const app = express();
const port = process.env.PORT || config.port;

dictionary.init((wordCount) => {
  app.server = http.createServer(app);
  app.server.listen(port);
  app.get('/', (err, res) => {
    res.send(`Dictionary Loaded: ${wordCount} words!`);
  });
});
