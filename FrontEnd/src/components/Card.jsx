// import React from "react";
// import { FaHeart, FaRegHeart } from "react-icons/fa";
// import { useFavorites } from "../services/FavoriteContext";
// import { useNavigate } from "react-router-dom";


// export default function Card({ thumbnail, title, channel, views, time,id }) {
//   const { toggleFavorite, isFavorite } = useFavorites();

//   const cardData = { thumbnail, title, channel, views, time,id };

//   const navigate=useNavigate();

//   return (
//     <div className="relative w-full flex flex-col gap-2 cursor-pointer">
//       <div className="relative">
//         <img src={thumbnail} alt="Thumbnail" className="w-full h-48 rounded-lg object-cover" onClick={()=>navigate(`/ThePlace/${id}`)} />
//         <button
//           onClick={() => toggleFavorite(cardData)}
//           className="absolute top-2 right-2 text-xl primary-bg rounded-full p-1 shadow-md hover:scale-110 transition"
//         >
//           {isFavorite(cardData) ? (
//             <FaHeart className="hart-color" />
//           ) : (
//             <FaRegHeart className="primary-text" />
//           )}
//         </button>
//       </div>
//       <div className="flex gap-3 mt-2">
//         <div className="flex flex-col">
//           <h3 className="text-sm font-semibold primary-text">{title}</h3>
//           <p className="text-xs primary-text">{channel}</p>
//           <p className="text-xs primary-text">{views} • {time}</p>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToFavorite } from "../utils/Store/actionCreaters"; // optional

export default function Card({ thumbnail, title, channel, views, time, id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favorites = useSelector((state) => state.favoritePlaces);
  const isFav = favorites.some((fav) => fav.id === id);

  const cardData = { thumbnail, title, channel, views, time, id };

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
          onClick={() => dispatch(addToFavorite(cardData))}
          className="absolute top-2 right-2 text-xl primary-bg rounded-full p-1 shadow-md hover:scale-110 transition"
        >
          {isFav ? <FaHeart className="hart-color" /> : <FaRegHeart className="primary-text" />}
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
