export default function catchAll(app) {
  app.get('/api/*', (req, res, next) => {
    res.status(404).send({
      status: 404,
      message: `Invalid URL requested: ${req.url}`,
    });
  });
}
