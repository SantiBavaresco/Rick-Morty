import { ADD_FAVORITE, DELETE_FAVORITE } from "./type.js";

const initialState = {
  myFavorites: []
}

// REDUCER
export default function rootReducer(state = initialState, action) {
    switch(action.type) {
      case ADD_FAVORITE:
        return{
            ...state,
            myFavorites: [...state.myFavorites, action.payload]
        }
      case DELETE_FAVORITE:
            const filtrado = state.myFavorites.filter(
            fav => fav.id !== action.payload
        );
        return{
            ...state,
            myFavorites: filtrado,
        }
      default:
        return state;
    }
    
  };
  
//   module.exports = contador;