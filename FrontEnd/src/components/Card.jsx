import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useFavorites } from "../services/FavoriteContext";

export default function Card({ thumbnail, title, channel, views, time,id }) {
  const { toggleFavorite, isFavorite } = useFavorites();

  const cardData = { thumbnail, title, channel, views, time,id };

  return (
    <div className="relative w-full flex flex-col gap-2 cursor-pointer">
      <div className="relative">
        <img src={thumbnail} alt="Thumbnail" className="w-full h-48 rounded-lg object-cover" />
        <button
          onClick={() => toggleFavorite(cardData)}
          className="absolute top-2 right-2 text-xl primary-bg rounded-full p-1 shadow-md hover:scale-110 transition"
        >
          {isFavorite(cardData) ? (
            <FaHeart className="hart-color" />
          ) : (
            <FaRegHeart className="primary-text" />
          )}
        </button>
      </div>
      <div className="flex gap-3 mt-2">
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold primary-text">{title}</h3>
          <p className="text-xs primary-text">{channel}</p>
          <p className="text-xs primary-text">{views} • {time}</p>
        </div>
      </div>
    </div>
  );
}
