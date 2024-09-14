
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import eventRoutes from './routes/eventRoutes.js';
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Connect to database
connectDB();

// Event Routes
app.use('/api/events', eventRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
