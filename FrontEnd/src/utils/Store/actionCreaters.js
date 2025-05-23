import {
  ADD_PLACES,
  ADD_TO_FAVORITE,
  SHOW_ONLY_FAVORITES,
  TOGGLE_DARK_MODE,
  ADD_MYPLACES,
  FILTERD_PLACES,
  UPDATE_FILTER,
  OWNER_LOGEDIN,
} from "./actionTypes";

export const addPlaces = (newPlaces) => ({ type: ADD_PLACES, newPlaces });
export const addToFavorite = (place) => ({ type: ADD_TO_FAVORITE, place });
export const showOnlyFavorites = () => ({ type: SHOW_ONLY_FAVORITES });
export const toggleDarkMode = () => ({ type: TOGGLE_DARK_MODE });
export const addmyplaces = (myPlaces) => ({ type: ADD_MYPLACES, myPlaces });
export const filterd_places = () => ({ type: FILTERD_PLACES });
export const update_filter = (filters) => ({ type: UPDATE_FILTER, filters });
export const owner_logedin = (email) => ({ type: OWNER_LOGEDIN, email });
