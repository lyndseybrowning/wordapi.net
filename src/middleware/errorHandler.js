const errorHandler = (err, req, res, next, env = process.env.NODE_ENV) => {
  const handler = {
    message: err.message,
    error: env === 'production' ? {} : err.stack,
  };

  res.status(err.status || 500).send(handler);
};

export default errorHandler;
