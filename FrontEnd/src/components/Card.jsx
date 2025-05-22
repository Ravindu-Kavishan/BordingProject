import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToFavorite } from "../utils/Store/actionCreaters";

export default function Card({
  thumbnailUrl,
  type,
  forWhome,
  availability,
  price,
  gate,
  _id,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favorites = useSelector((state) => state.favoritePlaces);
  const isFav = favorites.some((fav) => fav._id === _id);

  const cardData = {
    thumbnailUrl,
    type,
    forWhome,
    availability,
    price,
    gate,
    _id,
  };

  return (
    <div className="relative w-full flex flex-col gap-2 cursor-pointer">
      <div className="relative">
        <img
          src={thumbnailUrl}
          alt="thumbnailUrl"
          className="w-full h-48 rounded-lg object-cover"
          onClick={() => navigate(`/ThePlace/${_id}`)}
        />
        <button
          onClick={() => dispatch(addToFavorite(cardData))}
          className="absolute top-2 right-2 text-xl primary-bg rounded-full p-1 shadow-md hover:scale-110 transition"
        >
          {isFav ? (
            <FaHeart className="hart-color" />
          ) : (
            <FaRegHeart className="primary-text" />
          )}
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
            gate: <span className="font-medium">{gate}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
