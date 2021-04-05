import {baseUrl} from "../../../../lib/store/baseUrl";


export const postFeedback = (firstname, lastname, telnum, email, agree, contactType, message) => (dispatch) => {

    const newFeedback = {
        firstname: firstname,
        lastname: lastname,
        telnum: telnum,
        email: email,
        agree: agree,
        contactType: contactType,
        message: message,
    }
    newFeedback.date = new Date().toISOString();

    return fetch(baseUrl + 'feedback', {
        method: 'POST',
        body: JSON.stringify(newFeedback),
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
                    let error = new Error('Error ' + response.status + ': ' + response.statusText)
                    error.response = response;
                    throw error;
                }
            },
            ////if no responmse from server
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            }
        )
        .then(response => response.json())
        .then(response => alert(JSON.stringify(response)))
        .catch(error => {
            console.log('Post Comments', error.message);
            alert('Comment could not be posted\nError' + error.message);
        });

}



