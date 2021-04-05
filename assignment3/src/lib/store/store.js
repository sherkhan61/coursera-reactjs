import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';



export const RootState = () => {
    const store = createStore(
        Reducer,
        initialState
    );

    return store;
}
