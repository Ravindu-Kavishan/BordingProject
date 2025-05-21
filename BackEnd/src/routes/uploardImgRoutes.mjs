import express from 'express';
import { upload } from '../middleware/uploadMiddleware.mjs';
import { uploadImage } from '../controllers/imageController.mjs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

// Serve static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
router.use('/uploads', express.static(path.join(__dirname, '../../uploads')));

// Route
router.post('/upload', upload.single('image'), uploadImage);

export default router;
