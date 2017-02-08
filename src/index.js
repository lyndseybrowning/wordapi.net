import server from './server';
import config from './config';

const app = server();
const port = process.env.PORT || config.port;

app.server.listen(port);

export default app;
