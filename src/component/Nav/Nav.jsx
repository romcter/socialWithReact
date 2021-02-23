import React, {Component} from "react";
import n from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () =>{
    return(
        <nav className={n.nav}>
            <div className={n.item}>
                <NavLink to='/profile' activeClassName={n.active}>Profile</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/dialog' activeClassName={n.active}>Dialog</NavLink>
            </div>
            <div className={n.item}>
                <a href='/music'>Music</a>
            </div>
            <div className={n.item}>
                <a href='/message'>Message</a>
            </div>
        </nav>
    )
}
export default Nav;