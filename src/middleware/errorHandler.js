const dev = process.node_env === 'development';
const errorHandler = (err, req, res, next) => {
  const handler = {
    message: err.message,
    error: dev ? err.stack : {},
  };

  res.status(err.status || 500).send(handler);
};

export default errorHandler;
