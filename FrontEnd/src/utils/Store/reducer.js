// utils/Store/reducer.js
import {
  ADD_PLACES,
  ADD_TO_FAVORITE,
  SHOW_ONLY_FAVORITES,
  TOGGLE_DARK_MODE,
  ADD_MYPLACES,
  FILTERD_PLACES,
  UPDATE_FILTER,
  OWNER_LOGEDIN,
  FILTERD_AVAILABILITY,
  RESET_FILTER,
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
  filter: { type: "", forWhome: "", gate: "", availability: "" },
  favoritePlaces,
  showOnlyFavorites: false,
  myPlaces: [],
  unpaidplaces: [],
  darkMode: JSON.parse(localStorage.getItem("dark") ?? "false"),
  owneremail: localStorage.getItem("owneremail") ?? false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PLACES:
      return {
        ...state,
        places: [...action.newPlaces],
        filterdPlaces: [...action.newPlaces],
      };
    // add all the places to the filterdPlaces here

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

    case ADD_MYPLACES: {
      const unpaid_places = action.myPlaces.filter(
        ({ paid }) => paid === false
      );
      return {
        ...state,
        myPlaces: [...action.myPlaces],
        unpaidplaces: [...unpaid_places],
      };
    }

    case TOGGLE_DARK_MODE: {
      const next = !state.darkMode;
      localStorage.setItem("dark", next);
      return { ...state, darkMode: next };
    }

    case FILTERD_PLACES: {
      const { type, forWhome, gate, availability } = state.filter;

      const filtered = state.places.filter((place) => {
        const matchesType =
          !type || place.type === type || place.type === "One floor with rooms";
        const matchesForWhome =
          !forWhome ||
          place.forWhome === forWhome ||
          place.forWhome === "Both Ok";
        const matchesGate = !gate || place.gate === gate;
        const matchesAvailability =
          !availability ||
          place.availability === Number(availability) ||
          isNaN(Number(availability));

        return (
          matchesType && matchesForWhome && matchesGate && matchesAvailability
        );
      });

      return {
        ...state,
        filterdPlaces: filtered,
      };
    }
    case UPDATE_FILTER: {
      return {
        ...state,
        filter: { ...state.filter, ...action.filters },
      };
    }
    case FILTERD_AVAILABILITY: {
      return {
        ...state,
        filter: {
          ...state.filter,
          availability: action.availability,
        },
      };
    }
    case RESET_FILTER: {
      return {
        ...state,
        filter: { type: "", forWhome: "", gate: "", availability: "" },
      };
    }
    case OWNER_LOGEDIN: {
      console.log(action.email);
      localStorage.setItem("owneremail", action.email);
      return { ...state, owneremail: action.email };
    }

    default:
      return state;
  }
}
