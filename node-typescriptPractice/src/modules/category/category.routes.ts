import { Router } from 'express'
import { createCategory, deleteCategory, getCategories, getCategoryById, updateCategory } from './category.controller';

const router = Router()

// Examples of endpoints for this module

router.get('/', getCategories);
router.get('/:id', getCategoryById);
router.post('/', createCategory);
router.put('/', updateCategory);
router.delete('/:id', deleteCategory);

export default router;