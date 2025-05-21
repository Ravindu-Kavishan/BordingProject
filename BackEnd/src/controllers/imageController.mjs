import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get PORT from env if needed
const PORT = process.env.PORT || 3000;

export const uploadImage = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const filename = req.file.filename;
  const imageUrl = `http://localhost:${PORT}/uploads/${filename}`;
  res.status(200).json({ imageUrl });
};
