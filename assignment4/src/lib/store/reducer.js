import {COMMENTS} from "../../features/main/menu/modules/comments";
import {DISHES} from "../../features/main/menu/dishDetail/modules/dishes";
import {LEADERS} from "../../features/main/about/modules/leaders";
import {PROMOTIONS} from "../../features/main/home/modules/promotions";


export const initialState = {
    comments: COMMENTS,
    dishes: DISHES,
    leaders: LEADERS,
    promotions: PROMOTIONS,
};


export const Reducer = (state = initialState, action) => {
    return state;
};