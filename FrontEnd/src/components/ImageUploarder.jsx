import React, { useState } from "react";
import uploardService from "../services/uploardService";

// Single image uploader
function ThumbnailUploader({ onUpload }) {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", image);

    const result = await uploardService.uploadThumbnail(formData);

    if (result.success) {
      onUpload(result.imageUrl);
    } else {
      console.error("Image upload failed:", result.message);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md w-full addPlace-inptborder mx-auto text-center">
      <h2 className="text-lg font-semibold mb-4 addPlace-Text">
        Upload Thumbnail
      </h2>
      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="mb-4 w-32 h-32 object-cover mx-auto rounded-md"
        />
      )}
      <input
        type="file"
        onChange={handleFileChange}
        className="mb-4 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full
        file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
      >
        Upload
      </button>
    </div>
  );
}


function ImagesUploader({ onUpload }) {
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);

  const handleUpload = async () => {
    if (images.length === 0) return;

    const formData = new FormData();
    for (const image of images) {
      formData.append("images", image);
    }

    const result = await uploardService.uploadImages(formData);

    if (result.success) {
      onUpload(result.imageUrls); // array of image URLs
    } else {
      console.error("Image upload failed:", result.message);
    }
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    setPreviews(files.map((file) => URL.createObjectURL(file)));
  };

  return (
    <div className="p-4 border rounded-lg shadow-md w-full addPlace-inptborder mx-auto text-center mt-8">
      <h2 className="text-lg font-semibold mb-4 addPlace-Text">
        Upload Multiple Images
      </h2>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {previews.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Preview ${index}`}
            className="w-24 h-24 object-cover rounded-md"
          />
        ))}
      </div>
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="mb-4 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full
        file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
      />
      <button
        onClick={handleUpload}
        className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
      >
        Upload All
      </button>
    </div>
  );
}

export { ThumbnailUploader, ImagesUploader };
