import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { addPlaces } from "../utils/Store/actionCreaters"; 
import dataService from "../services/dataService";

export default function CardContainer() {
  const dispatch = useDispatch();

  const places = useSelector((state) => state.filterdPlaces);
  const favoritePlaces = useSelector((state) => state.favoritePlaces);

  const showOnlyFavorites = useSelector((state) => state.showOnlyFavorites);

  const displayCards = showOnlyFavorites ? favoritePlaces : places;

  useEffect(() => {
    const fetchPlaces = async () => {
      const result = await dataService.getAllPlaces();
      if (result.success) {
        dispatch(addPlaces(result.data));
      } else {
        console.error(result.message);
      }
    };

    fetchPlaces();
  }, [dispatch]);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 primary-bg">
      {displayCards.map((card) => (
        <Card key={card._id} {...card} />
      ))}
    </div>
  );
}
