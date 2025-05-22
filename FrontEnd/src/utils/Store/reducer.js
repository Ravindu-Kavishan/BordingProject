// utils/Store/reducer.js
import {
  ADD_PLACES,
  ADD_TO_FAVORITE,
  SHOW_ONLY_FAVORITES,
  TOGGLE_DARK_MODE,
  ADD_MYPLACES,
  FILTERD_PLACES,
} from "./actionTypes";

let favoritePlaces = [];
try {
  const storedFavorites = localStorage.getItem("favoritePlaces");
  if (storedFavorites) favoritePlaces = JSON.parse(storedFavorites);
} catch {
  favoritePlaces = [];
}

const initialState = {
  places: [],
  filterdPlaces: [],
  favoritePlaces,
  showOnlyFavorites: false,
  myPlaces: [],
  darkMode: JSON.parse(localStorage.getItem("dark") ?? "false"),
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PLACES:
      return { ...state, places: [...action.newPlaces] };

    case ADD_TO_FAVORITE: {
      const isAlreadyFavorite = state.favoritePlaces.some(
        (p) => p._id === action.place._id
      );

      const updatedFavorites = isAlreadyFavorite
        ? state.favoritePlaces.filter((p) => p._id !== action.place._id)
        : [...state.favoritePlaces, action.place];

      localStorage.setItem("favoritePlaces", JSON.stringify(updatedFavorites));

      return {
        ...state,
        favoritePlaces: updatedFavorites,
      };
    }

    case SHOW_ONLY_FAVORITES:
      return { ...state, showOnlyFavorites: !state.showOnlyFavorites };

    case ADD_MYPLACES:
      return { ...state, myPlaces: [...action.myPlaces] };

    case TOGGLE_DARK_MODE: {
      const next = !state.darkMode;
      localStorage.setItem("dark", next);
      return { ...state, darkMode: next };
    }

    case FILTERD_PLACES: {
      const { type, forWhome, gate } = action.filters;

      const filtered = state.places.filter((place) => {
        const matchesType = !type || place.type === type;
        const matchesForWhome = !forWhome || place.forWhome === forWhome;
        const matchesGate = !gate || place.gate === gate;

        return matchesType && matchesForWhome && matchesGate;
      });

      return {
        ...state,
        filterdPlaces: filtered,
      };
    }

    default:
      return state;
  }
}
