import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import dotenv from 'dotenv';
import WPSync from 'kiwipress';
import routes from './routes/routes.js';

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
server.use('/api', routes);

server.get('/check', (req, res) => {
    return res.status(200).json(
        {
            message: 'API is live.'
        }
    );
});

server.listen(PORT, () => {
    console.log('Server is listening on port: ' + PORT);
})