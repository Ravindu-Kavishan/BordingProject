import { ADD_PLACES, ADD_TO_FAVORITE } from "./actionTypes";

export const addPlaces = (newPlaces) => ({
  type: ADD_PLACES,
  newPlaces,
});

export const addToFavorite = (place) => ({
  type: ADD_TO_FAVORITE,
  place,
});
