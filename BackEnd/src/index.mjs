import 'dotenv/config'; 
import express from 'express';
import connectDB from './config/db.mjs';
import ownerRoutes from "./routes/ownerRoutes.mjs";
import cookieParser from 'cookie-parser';
import cors from 'cors'; // ✅ Import CORS

const app = express();
connectDB();
const PORT = process.env.PORT || 3000;

// ✅ Configure CORS middleware
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true, 
}));

app.use(express.json());
app.use(cookieParser());

// Simple route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Routes
app.use('/owners', ownerRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
