import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use same PORT as your server
const PORT = process.env.PORT || 3000;

const uploadImage = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const filename = req.file.filename;
  const imageUrl = `http://10.10.7.165:${PORT}/uploads/${filename}`;
  res.status(200).json({ imageUrl });
};

const uploadImages = (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: "No files uploaded" });
  }

  const imageUrls = req.files.map(file => {
    return `http://10.10.7.165:${PORT}/uploads/${file.filename}`;
  });

  res.status(200).json({ imageUrls });
};

export default { uploadImage, uploadImages };
