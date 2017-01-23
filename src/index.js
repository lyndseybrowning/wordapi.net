import dictionary from './dictionary';
import server from './server';

export default dictionary.init((err) => {
  if(err) {
    throw err;
  }
  return server.init();
});
