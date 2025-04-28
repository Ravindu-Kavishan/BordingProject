import 'dotenv/config'; 
import express from 'express';
import connectDB from './config/db.mjs';
import userRoutes from "./routes/userRoutes.mjs"
import cookieParser from 'cookie-parser';


const app = express();
connectDB();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());


// Simple route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Routes
app.use('/users', userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
