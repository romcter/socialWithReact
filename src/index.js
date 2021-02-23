import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/redux-store";

export let rendereEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

console.log(store);
debugger;

rendereEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    rendereEntireTree(state)
})

reportWebVitals();
