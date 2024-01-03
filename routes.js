const express = require('express');
const productController = require('./controllers/ProductController');

const route = express.Router();


route.get('/products', productController.getProductView);
route.get('/add-product', productController.getAddProductView);
route.post('/add-product', productController.createNewProduct);


module.exports = route;