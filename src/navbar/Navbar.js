import React from "react";
import './navbar.scss'

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
                            <a href="#">CARD DESIGN</a>
                        </li>
                        <li className="menu-items">
                            <a href="#">CONTACT</a>
                        </li>
                    </ul>
                </div>


            </div>
        </nav>

    )
}