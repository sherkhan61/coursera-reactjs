import * as ActionTypes from "./types";
import {baseUrl} from "../../../../lib/store/baseUrl";


export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comment
});


export const postComment = (dishId, rating, author, comment)=> (dispatch)=> {

    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment,
    }
    newComment.date = new Date().toISOString();

    return fetch( baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'same-origin'
    })
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
            }
        )
        .then( response => response.json() )
        .then( response => dispatch(addComment(response)) )
        .catch(error => {
            console.log('Post Comments', error.message);
            alert('Comment could not be posted\nError'+ error.message);
        });

}