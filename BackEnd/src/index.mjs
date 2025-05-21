import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.mjs";
import ownerRoutes from "./routes/ownerRoutes.mjs";
import userRoutes from "./routes/userRoutes.mjs";
import uploardImgRoutes from "./routes/uploardImgRoutes.mjs";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
connectDB();
const PORT = process.env.PORT || 3000;

// __dirname setup for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// Serve uploads folder globally at /uploads
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Routes
app.use("/owners", ownerRoutes);
app.use("/users", userRoutes);
app.use("/uploadImgs", uploardImgRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
