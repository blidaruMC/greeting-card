import React from "react";
import './navbar.scss'
import {NavLink} from "react-router-dom";

export function Navbar() {

    return (
        <nav className="desktop-menu">
            <div className='navbar'>
                <div className='logo'>
                    <a href="#">GreetCARD</a>
                </div>
                <div className='menu'>
                    <ul>
                        <li className="menu-items">
                            <NavLink activeClassName={'active'} to={'/'}>CARD DESIGN</NavLink>
                        </li>
                        <li className="menu-items">
                            <NavLink activeClassName={'active'} to={'/contact'}>CONTACT</NavLink>
                        </li>
                    </ul>
                </div>


            </div>
        </nav>

    )
}