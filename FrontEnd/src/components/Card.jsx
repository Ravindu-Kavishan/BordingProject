import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function Card({ thumbnail, title, channel, views, time}) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    const updated = !isFavorite;
    setIsFavorite(updated);
    
  };

  return (
    <div className="relative w-full flex flex-col gap-2 cursor-pointer">
      {/* Thumbnail with heart icon */}
      <div className="relative">
        <img
          src={thumbnail}
          alt="Thumbnail"
          className="w-full h-48 rounded-lg object-cover"
        />
        <button
          onClick={handleFavoriteClick}
          className="absolute top-2 right-2 text-xl primary-bg rounded-full p-1 shadow-md hover:scale-110 transition"
        >
          {isFavorite ? (
            <FaHeart className="hart-color" />
          ) : (
            <FaRegHeart className="primary-text" />
          )}
        </button>
      </div>

      {/* Text content */}
      <div className="flex gap-3 mt-2">
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold primary-text">{title}</h3>
          <p className="text-xs primary-text">{channel}</p>
          <p className="text-xs primary-text">
            {views} • {time}
          </p>
        </div>
      </div>
    </div>
  );
}
