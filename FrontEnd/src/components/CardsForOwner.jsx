import React from "react";
import { FaTrash } from "react-icons/fa"; // Correct icon
import { useNavigate } from "react-router-dom";

export default function CardsForOwner({
  thumbnail,
  type,
  forWhome,
  availablity,
  price,
  distance,
  _id,
}) {

  const navigate = useNavigate();

  if (_id === "addBording") {
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
          onClick={() => navigate(`/OwnerPlace/${_id}`)}
        />
        <button
          onClick={() => {
            // Add your delete logic here
            console.log("Delete clicked for _id:", _id);
          }}
          className="absolute top-2 right-2 text-xl primary-bg rounded-full p-1 shadow-md hover:scale-110 transition"
        >
          <FaTrash className="hart-color" />
        </button>
      </div>
      <div className="flex flex-col gap-1 p-2 primary-text rounded-md shadow-sm">
        <h3 className="text-sm font-semibold primary-text">
          Type: <span className="font-normal">{type}</span>
        </h3>
        <div className="grid grid-cols-2 gap-1 text-xs primary-text">
          <p>
            For: <span className="font-medium">{forWhome}</span>
          </p>
          <p>
            Availability: <span className="font-medium">{availablity}</span>
          </p>
          <p>
            Price: <span className="font-medium">Rs. {price}</span>
          </p>
          <p>
            Distance: <span className="font-medium">{distance} m</span>
          </p>
        </div>
      </div>
    </div>
  );
}
