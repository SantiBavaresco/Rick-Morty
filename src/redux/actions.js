import { ADD_FAVORITE, DELETE_FAVORITE } from "./type";

// ACTION CREATORS
export function addFavorite (obj){ 
    return {
        type: ADD_FAVORITE,
        payload: obj
    }
};

export function deleteFavorite(obj){ 
    return {
        type: DELETE_FAVORITE,
        payload: obj
    };
};