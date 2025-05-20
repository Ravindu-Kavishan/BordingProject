import React from "react";
import { FaTrash } from "react-icons/fa"; // Correct icon
import { useNavigate } from "react-router-dom";

export default function CardsForOwner({
  thumbnail,
  title,
  channel,
  views,
  time,
  id,
}) {
  const navigate = useNavigate();

  if (id === "addBording") {
    return (
      <div className="relative w-full flex flex-col gap-2 cursor-pointer">
        <div className="relative">
          <img
            src={thumbnail}
            alt="Thumbnail"
            className="w-full h-48 rounded-lg object-cover"
            onClick={() => navigate(`/AddBordingPlace`)}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full flex flex-col gap-2 cursor-pointer">
      <div className="relative">
        <img
          src={thumbnail}
          alt="Thumbnail"
          className="w-full h-48 rounded-lg object-cover"
          onClick={() => navigate(`/ThePlace/${id}`)}
        />
        <button
          onClick={() => {
            // Add your delete logic here
            console.log("Delete clicked for id:", id);
          }}
          className="absolute top-2 right-2 text-xl primary-bg rounded-full p-1 shadow-md hover:scale-110 transition"
        >
          <FaTrash className="hart-color" />
        </button>
      </div>
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
