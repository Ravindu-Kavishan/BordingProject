import {
  ADD_PLACES,
  ADD_TO_FAVORITE,
  SHOW_ONLY_FAVORITES,
} from "./actionTypes";

const initialState = {
  places: [],
  favoritePlaces: [],
  showOnlyFavorites:false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PLACES:
      return {
        ...state,
        places: [...state.places, ...action.newPlaces],
      };

    case ADD_TO_FAVORITE:
      const isAlreadyFavorite = state.favoritePlaces.some(
        (p) => p.id === action.place.id
      );
      return {
        ...state,
        favoritePlaces: isAlreadyFavorite
          ? state.favoritePlaces.filter((p) => p.id !== action.place.id) // remove
          : [...state.favoritePlaces, action.place], // add
      };
      case SHOW_ONLY_FAVORITES:
        return {
          ...state,
          showOnlyFavorites: !state.showOnlyFavorites, // fix this line
        };
      
    default:
      return state;
  }
}
