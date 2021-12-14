const Product = require('../models/Product');
const { mutipleMongooseToOject } = require('../../util/mongoose');

class ProductController {
  // [GET] /products
  index(req, res) {
    res.render('product');
  }
  // [GET] /products/:slug
  show(req, res, next) {
    Product.findOne({ slug: req.params.slug })
      .then(products => {
        res.render('product-detail', {
          layout: 'website/detail',
        });
      }).catch(next)
    
  }
  // [GET] /products/create
  // create(req, res) {
  //   res.send('Details');
  // }
}
module.exports = new ProductController();
