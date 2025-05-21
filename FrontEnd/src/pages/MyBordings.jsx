import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardsForOwner from "../components/CardsForOwner";
import { addmyplaces } from "../utils/Store/actionCreaters";
import dataService from "../services/dataService";

export default function MyBordings() {
  const dispatch = useDispatch();
  const MyCards = useSelector((state) => state.myPlaces);

  const [error, setError] = React.useState(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      const result = await dataService.getMyPlaces();
      if (result.success) {
        dispatch(addmyplaces(result.data));
      } else {
        setError(result.message);
      }
    };

    fetchPlaces();
  }, [dispatch]);

  const addBording = {
    thumbnail:
      "https://img.freepik.com/premium-vector/screen-that-has-video-it_988987-29345.jpg",
    _id: "addBording",
  };

  const displayCards = [...MyCards, addBording];

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 primary-bg">
      {displayCards.map((card) => (
        <CardsForOwner key={card._id} {...card} />
      ))}
    </div>
  );
}
