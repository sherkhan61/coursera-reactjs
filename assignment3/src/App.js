import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Main from "./features/main/Main";
import {Provider} from "react-redux";
import {RootState} from "./lib/store/store";


const store = RootState();

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Main/>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
