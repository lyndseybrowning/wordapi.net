import dictionary from './dictionary';
import server from './server';

dictionary.init(err => {
  if(err) {
    throw err;
  }
  server.init();
});
