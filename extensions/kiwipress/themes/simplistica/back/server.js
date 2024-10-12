import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import dotenv from 'dotenv';
import WPSync from 'kiwipress';

dotenv.config();

// Initialize Express
const server = express();

// Middleware
server.use(cors());
server.use(express.json());

// Recreate __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'front/public' directory
server.use(express.static(path.join(__dirname, '../front/public')));

// Example usage of WPSync class
const wp = new WPSync();

// Other server configurations go here


const PORT = process.env.PORT || 5000;
server.use(cors({
    origin: 'http://localhost:3000', // Update with the actual URL of your frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow methods as needed
    credentials: true, // Allow credentials if required
}));
server.use(express.json());

server.get('/posts', async (req, res) => {
    try {
        const response = await fetch(`${process.env.WP_POSTS}`);
        const data = await response.json();
        
        if (!data || data.length === 0) {
            return res.status(404).json({ message: 'No posts found' });
        }

        return res.json(data);
    } catch (error) {
        console.error('Error fetching posts:', error);
        return res.status(500).json({ error: 'Failed to fetch posts' });
    }
});

server.get('/', (req, res) => {
    res.json(
        {
            "message": 'Hello World'
        }
    )
})

server.listen(PORT, () => {
    console.log('Server is listening on port: ' + PORT);
    // console.log(wp.get_posts(`${process.env.WP_POSTS}`))
})