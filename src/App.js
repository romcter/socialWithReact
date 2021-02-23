import React, {Component} from "react";
import './App.css';
import Header from "./component/Header/Header";
import Nav from "./component/Nav/Nav";
import Dialogs from "./component/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./component/Profile/Profile";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <Route path='/profile' render={() => <Profile/> }/>
                <Route path='/dialog' render={() => <Dialogs/>}/>
            </div>
        </BrowserRouter>
    );
}
export default App;
