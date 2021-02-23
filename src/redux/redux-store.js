import {combineReducers, createStore} from "redux";
import profileReducer from './profile-reducer';
import dialogReducer from './dialog-reducer';
import sidebarReducer from './sideBar-reducer';


let reducer = combineReducers({
    profileReducer,
    dialogReducer,
    sidebarReducer
})

let store = createStore(reducer);

export default store;