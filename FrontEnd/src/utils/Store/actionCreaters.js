import { ADD_PLACES, ADD_TO_FAVORITE,SHOW_ONLY_FAVORITES } from "./actionTypes";

export const addPlaces = (newPlaces) => ({
  type: ADD_PLACES,
  newPlaces,
});

export const addToFavorite = (place) => ({
  type: ADD_TO_FAVORITE,
  place,
});


export const showOnlyFavorites = () => ({
    type: SHOW_ONLY_FAVORITES
  });
  
