import {baseUrl} from "../../../../../lib/store/baseUrl";
import * as ActionTypes from "./types";



export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
        .then(response => {
                if (response.ok)
                {
                    return response;
                }
                else
                {
                    let error = new Error('Error ' + response.status + ': '+ response.statusText )
                    error.response = response;
                    throw error;
                }
            },
            ////if no responmse from server
            error => {
                let errmess = new Error( error.message );
                throw errmess;
            })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message) ) );
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

//function returns an action
export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});
