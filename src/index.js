import path from 'path';
import fs from 'fs';
import http from 'http';
import express from 'express';
import config from './config';

const dictionary = path.join(__dirname, config.dictionary.sowpods);

fs.readFile(dictionary, 'utf8', (err, dict) => {
  if(err) {
    throw err;
  }

  const dictArr = dict.split('\n');
  dictArr.forEach((word) => {
    // read word into Trie
  });

  console.log(dictArr.length);
});

const app = express();
const port = process.env.PORT || config.port;
app.server = http.createServer(app);
app.server.listen(port);

app.get('/', (req, res) => {
  res.send(`API started on port: ${port}`);
});
