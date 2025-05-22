import {
  ADD_PLACES,
  ADD_TO_FAVORITE,
  SHOW_ONLY_FAVORITES,
  TOGGLE_DARK_MODE,
  ADD_MYPLACES,
  FILTERD_PLACES,
} from "./actionTypes";

export const addPlaces = (newPlaces) => ({ type: ADD_PLACES, newPlaces });
export const addToFavorite = (place) => ({ type: ADD_TO_FAVORITE, place });
export const showOnlyFavorites = () => ({ type: SHOW_ONLY_FAVORITES });
export const toggleDarkMode = () => ({ type: TOGGLE_DARK_MODE });
export const addmyplaces = (myPlaces) => ({ type: ADD_MYPLACES, myPlaces });
export const filterd_places = (filters) => ({ type: FILTERD_PLACES, filters });
// filters is an objact it {type:...,forWhome:...,gate:...}
// type ->House/Room/""
// forWhome->Boys/Girls/""
// gate->Frount_Gate_of_UOM/Back_Gate_of_UOM/""