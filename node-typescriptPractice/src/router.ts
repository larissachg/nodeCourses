import { Router } from "express";
import productRoutes from './modules/product/product.routes'
import categoryRoutes from './modules/category/category.routes'

const router = Router()

// Aqui llamaremos a cada ruta de la aplicacion dentro de los modulos
// el primer parametro en el use es la extension de la ruta
router.use('/product', productRoutes)
router.use('/category', categoryRoutes)

export { router } 