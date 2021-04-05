import {applyMiddleware, combineReducers, createStore} from 'redux';
import {createForms} from "react-redux-form";
import {Dishes} from "../../features/main/menu/dishDetail/modules/reducer";
import {Comments} from "../../features/main/menu/modules/reducer";
import {Promotions} from "../../features/main/home/modules/reducer";
import {Leaders} from "../../features/main/about/modules/reducer";
import {InitialFeedback} from "../../features/main/contact/modules/forms";




export const RootState = () => {
    const store = createStore(

        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,

            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware( thunk, logger )
    );



    return store;
}
