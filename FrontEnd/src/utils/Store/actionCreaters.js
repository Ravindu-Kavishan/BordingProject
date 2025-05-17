// utils/Store/actionCreaters.js
import {
  ADD_PLACES,
  ADD_TO_FAVORITE,
  SHOW_ONLY_FAVORITES,
  TOGGLE_DARK_MODE,        // NEW
} from "./actionTypes";

export const addPlaces = (newPlaces) => ({ type: ADD_PLACES, newPlaces });
export const addToFavorite = (place)   => ({ type: ADD_TO_FAVORITE, place });
export const showOnlyFavorites = ()    => ({ type: SHOW_ONLY_FAVORITES });
export const toggleDarkMode = ()       => ({ type: TOGGLE_DARK_MODE });   // NEW
