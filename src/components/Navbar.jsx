import React, { useState } from 'react';
import {Link, NavLink} from 'react-router-dom';
import "./Navbar.css";
import logo from "../assets/ess-logo.png";

export const Navbar = () => {

    const [menuOpen,setMenuOpen] = useState(false)

    return <nav>
        <Link to="/" className="title"> 
            <img src={logo} alt="Logo" />
        </Link>


        <div
            className="menu"
            onClick={() =>{setMenuOpen(!menuOpen)
            }}>
            <span></span>
            <span></span>
            <span></span>
        </div>


        <ul className={menuOpen ? "open" : ""}>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/council">Council</NavLink>
            </li>
            <li>
                <NavLink to="/events">Events</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>

        </ul>
    </nav>
};

export default Navbar