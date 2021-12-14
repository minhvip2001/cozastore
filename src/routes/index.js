const productRouter = require('./product');
const homeRouter = require('./home');

function route(app) {
  app.use('/products', productRouter);

  app.use('/', homeRouter);
}

module.exports = route;
