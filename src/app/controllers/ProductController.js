const Product = require('../models/Product');
const { mongooseToObject } = require('../../util/mongoose');

class ProductController {
  // [GET] /products
  index(req, res) {
    res.render('list_product', {
      layout: 'admin/main',
    });
  }
  // [GET] /products/:slug
  show(req, res, next) {
    Product.findOne({ slug: req.params.slug })
      .then((product) => {
        res.render('product-detail', {
          layout: 'website/detail',
          product: mongooseToObject(product),
        });
      })
      .catch(next);
  }
  // [GET] admin/products/
  create(req, res, next) {
    res.render('add_product', {
      layout: 'admin/main',
    });
  }
}
module.exports = new ProductController();
