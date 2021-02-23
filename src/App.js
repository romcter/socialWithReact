import React, {Component} from "react";
import './App.css';
import Header from "./component/Header/Header";
import Nav from "./component/Nav/Nav";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./component/Profile/Profile";
import DialogsComponent from "./component/Dialogs/DialogsComponent";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <Route path='/profile' render={() => <Profile/> }/>
                <Route path='/dialog' render={() => <DialogsComponent store={props.store}/>}/>
            </div>
        </BrowserRouter>
    );
}
export default App;
