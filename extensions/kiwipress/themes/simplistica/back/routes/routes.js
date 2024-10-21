import express from 'express';
import postsRoutes from './posts/posts.js';
import userRoutes from './users/users.js';
import productsRoutes from './products/products.js';

const router = express.Router();

router.use('/posts', postsRoutes);
router.use('/users', userRoutes);
router.use('/products', productsRoutes);

export default router;