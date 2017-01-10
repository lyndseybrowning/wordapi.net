import dictionary from './dictionary';
import server from './server';

dictionary.init((err, res) => {
  if(err) {
    throw err;
  }

  server.init(res);
});
