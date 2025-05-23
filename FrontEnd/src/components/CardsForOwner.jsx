import React from "react";
import { FaTrash } from "react-icons/fa"; // Correct icon
import { useNavigate } from "react-router-dom";
import dataService from "../services/dataService";

export default function CardsForOwner({
  thumbnailUrl,
  type,
  forWhome,
  availability,
  price,
  gate,
  _id,
  setErrorMsg,
  setSuccessMsg,
  refreshPlaces,
}) {
  const navigate = useNavigate();

  if (_id === "addBording") {
    return (
      <div className="relative w-full flex flex-col gap-2 cursor-pointer">
        <div className="relative">
          <img
            src={thumbnailUrl}
            alt="thumbnailUrl"
            className="w-full h-48 rounded-lg object-cover"
            onClick={() => navigate(`/AddBordingPlace`)}
          />
        </div>
      </div>
    );
  }

  async function deleteClicked() {
    const result = await dataService.DeletePlace({
      _id,
    });

    if (result.success) {
      setErrorMsg("");
      setSuccessMsg(result.data.message);
      refreshPlaces();
    } else {
      setSuccessMsg("");
      setErrorMsg(result.message);
    }
  }

  return (
    <div className="relative w-full flex flex-col gap-2 cursor-pointer">
      <div className="relative">
        <img
          src={thumbnailUrl}
          alt="thumbnailUrl"
          className="w-full h-48 rounded-lg object-cover"
          onClick={() => navigate(`/OwnerPlace/${_id}`)}
        />
        <button
          onClick={deleteClicked}
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
            Availability: <span className="font-medium">{availability}</span>
          </p>
          <p>
            Price: <span className="font-medium">Rs. {price}</span>
          </p>
          <p>
            gate: <span className="font-medium">{gate} m</span>
          </p>
        </div>
      </div>
    </div>
  );
}
