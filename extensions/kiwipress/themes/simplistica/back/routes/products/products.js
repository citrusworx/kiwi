import express from 'express';
import dotenv from 'dotenv';

const router = express.Router();
dotenv.config();

router.get('/category/:category', async(req, res) => {
    const { category } = req.params;
    try {
        console.log(category);
        const response = await fetch(`${process.env.WP_CATEGORIES}`);
        const data = await response.json();
    }
    catch {

    }
})

router.get('/:slug', async (req, res) => {
    const { slug } = req.params;
    try {
        console.log(slug);
        const response = await fetch(`${process.env.WP_PRODUCTS}?slug=` + `${slug}`);
        const data = await response.json();
        
        if (!data || data.length === 0) {
            return res.status(404).json({ message: 'Product data not found' });
        }

        return res.json(data);
    } catch (error) {
        console.error('Error fetching author data:', error);
        return res.status(500).json({ error: 'Failed to fetch author data' });
    }
});

router.get('/', async (req, res) => {
    try {
        const response = await fetch(`${process.env.WP_PRODUCTS}`);
        const data = await response.json();

        if (!data || data.length === 0) {
            return res.status(404).json({ message: 'Product data not found' });
        }

        return res.json(data);
    } catch (error) {
        console.error('Error fetching author data:', error);
        return res.status(500).json({ error: 'Failed to fetch author data' });
    }
});

export default router;