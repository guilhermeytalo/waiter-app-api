import {Router} from 'express';
import {createCategory} from './useCases/categories/createCategory';
import {listCategories} from './useCases/categories/listCategories';
import {listProducts} from './useCases/products/listProducts';
import {createProduct} from './useCases/products/createProduct';
import multer from 'multer';

export const router = Router();

const upload = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, '');
  }
});

// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategory);

// List products
router.get('/products', listProducts);

// Create product
router.post('/products', createProduct);

// Get product by category
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('OK');
});

// List orders
router.get('/orders', (req, res) => {
  res.send('OK');
});

// Create order
router.post('/orders', (req, res) => {
  res.send('OK');
});

// Change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('OK');
});

// Delete/cancel order
router.delete('/orders/:orderId', (req, res) => {
  res.send('OK');
});
