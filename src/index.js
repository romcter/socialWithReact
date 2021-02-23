import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/redux-store";
import {Provider} from 'react-redux';

export let rendereEntireTree = (state) => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('root')
    );
}

rendereEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    rendereEntireTree(state)
})

reportWebVitals();
