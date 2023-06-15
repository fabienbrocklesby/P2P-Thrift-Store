import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db.js';
import routes from './shared/router.js';

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

// Define Routes
routes(app);

app.listen(port, () => console.log(`Server running on port ${port}`));
