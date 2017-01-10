import http from 'http';
import express from 'express';
import config from './config';

const app = express();
const port = process.env.PORT || config.port;

const server = {
  init(dictionary) {
    app.server = http.createServer(app);
    app.server.listen(port);
    app.get('/', (err, res) => {
      res.send(`Dictionary Loaded: ${dictionary.wordCount} words, yeah!`);
    });
  }
};

export default server;
