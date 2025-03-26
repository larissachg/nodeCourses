import { Router } from 'express'
import { getProductById, getProducts, getProductsByCategory, createProduct, deleteProduct, updateProduct } from './product.controller';

const router = Router()

// Examples of endpoints for this module

router.get('/', getProducts);
router.get('/:id', getProductById);
router.get('/byCategory/:category', getProductsByCategory);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;