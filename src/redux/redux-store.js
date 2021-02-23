import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialog-reducer";

let reducer = combineReducers({
    dialogReducer: dialogReducer
})

let store = createStore(reducer);

export default store;