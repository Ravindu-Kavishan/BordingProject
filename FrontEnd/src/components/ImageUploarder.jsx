import React, { useState } from "react";

// Single image uploader
function ThumbnailUploarder({ onUpload }) {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", image);

    const response = await fetch("http://localhost:3000/uploadImgs/thumbnail", {
      method: "POST",
      body: formData,
    });

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      onUpload(data.imageUrl);
    } else {
      const text = await response.text();
      console.error("Server responded with non-JSON:", text);
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

// Multiple image uploader
function ImagesUploader({ onUpload }) {
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);

  const handleUpload = async () => {
    if (images.length === 0) return;

    const formData = new FormData();
    for (const image of images) {
      formData.append("images", image);
    }

    const response = await fetch("http://localhost:3000/uploadImgs/images", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    onUpload(data.imageUrls);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    setPreviews(files.map((file) => URL.createObjectURL(file)));
  };

  return (
    <div className="p-4 border rounded-lg shadow-md w-full addPlace-inptborder  mx-auto text-center mt-8">
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

export { ThumbnailUploarder, ImagesUploader };
