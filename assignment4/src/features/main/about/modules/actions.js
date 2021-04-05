import {baseUrl} from "../../../../lib/store/baseUrl";
import * as ActionTypes from './types';



export const fetchLeaders = () => (dispatch) => {

    dispatch( leadersLoading() );

    return fetch( baseUrl + 'leaders')
        .then(response => {
                if (response.ok) {
                    return response;
                }
                else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText)
                    error.response = response;
                    throw error;
                }
            },
            ////if no responmse from server
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then( leaders => dispatch( addLeaders(leaders) ) )
        .catch(error => dispatch(leadersFailed(error.message)));
}

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess
});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});