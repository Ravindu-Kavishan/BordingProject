import express from "express";
import { upload } from "../middleware/uploadMiddleware.mjs";
import uploads from "../controllers/imageController.mjs";
import path from "path";
import { fileURLToPath } from "url";

const { uploadImage, uploadImages } = uploads; // Destructure correcy

const router = express.Router();

// Serve static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
router.use("/uploads", express.static(path.join(__dirname, "../../uploads")));

// Routes
router.post("/thumbnail", upload.single("image"), uploadImage);
router.post("/images", upload.array("images", 10), uploadImages);

export default router;
