import http from 'http';
import express from 'express';
import config from './config';

const app = express();
const port = process.env.PORT || config.port;
app.server = http.createServer(app);
app.server.listen(port);

app.get('/', (req, res) => {
  res.send(`API started on port: ${port}`);
});
