import http from 'http';
import express from 'express';
import config from './config';
import dictionary from './dictionary';

const app = express();
const port = process.env.PORT || config.port;

dictionary.init((err, result) => {
  if(err) {
    throw err;
  }

  app.server = http.createServer(app);
  app.server.listen(port);
  app.get('/', (err, res) => {
    res.send(`Dictionary Loaded: ${result.wordCount} words!`);
  });
});
