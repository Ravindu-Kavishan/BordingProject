// utils/Store/reducer.js
import {
  ADD_PLACES,
  ADD_TO_FAVORITE,
  SHOW_ONLY_FAVORITES,
  TOGGLE_DARK_MODE,
  ADD_MYPLACES,
} from "./actionTypes";

const initialState = {
  places: [],
  favoritePlaces: [],
  showOnlyFavorites: false,
  myPlaces: [],
  darkMode: JSON.parse(localStorage.getItem("dark") ?? "false"), // hydrate
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PLACES:
      return { ...state, places: [...action.newPlaces] };

    case ADD_TO_FAVORITE: {
      const isAlreadyFavorite = state.favoritePlaces.some(
        (p) => p.id === action.place.id
      );
      return {
        ...state,
        favoritePlaces: isAlreadyFavorite
          ? state.favoritePlaces.filter((p) => p.id !== action.place.id)
          : [...state.favoritePlaces, action.place],
      };
    }

    case SHOW_ONLY_FAVORITES:
      return { ...state, showOnlyFavorites: !state.showOnlyFavorites };

    case ADD_MYPLACES:
      console.log("ADD_MYPLACES payload:", action.myplaces);
      return { ...state, myPlaces: [...action.myPlaces] };

    case TOGGLE_DARK_MODE: {
      const next = !state.darkMode;
      localStorage.setItem("dark", next);
      console.log("good mood");
      return { ...state, darkMode: next };
    }

    default:
      return state;
  }
}
