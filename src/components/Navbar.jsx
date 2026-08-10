import React, { useState } from 'react';
import {Link, NavLink} from 'react-router-dom';
import "./Navbar.css";
import logo from "../assets/ess-logo.png";
import { FaInstagram } from "react-icons/fa";

export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false) //for css effects
    const [aboutOpen, setAboutOpen] = useState(false); //for dropdown menu
    const [getinvolvedOpen, setGetInvolvedOpen] = useState(false); //for dropdown menu
    const [resourcesOpen, setresourcesOpen] = useState(false); //for dropdown menu

    const [activeDropdown, setActiveDropdown] = useState(null);

    const closeAllMenus = () => {
        setMenuOpen(false);
        setActiveDropdown(null);
        };
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
                <NavLink to="/"  onClick={closeAllMenus}>Home</NavLink>
            </li>

            <li>
                <NavLink to="/council"  onClick={closeAllMenus}>Council</NavLink>
            </li>

            <li>
                <NavLink to="/events"  onClick={closeAllMenus}>Events</NavLink>
            </li>

            <li className="dropdown">
                <div onClick={() => {
                    // Only toggle via click if the window width is mobile size
                    if (window.innerWidth <= 480) {
                        setActiveDropdown(activeDropdown === "about" ? null : "about");
                    }       
                    }}>
                    About ▾
                    </div>
                <ul className={`dropdown-menu ${activeDropdown === "about" ? "open" : ""}`}>
                    <li><NavLink to="/departments" onClick={closeAllMenus}>Departments</NavLink></li>
                    <li><NavLink to="/membership" onClick={closeAllMenus}>Membership</NavLink></li>
                </ul>
            </li>

            <li>
                <NavLink to="/sponsors" onClick={closeAllMenus}>Sponsors</NavLink>
            </li>
            
            <li>
                <NavLink to="/applications" onClick={closeAllMenus}>Get Involved</NavLink>
            </li>
           
            <li className="dropdown">
                <div onClick={() => {
                    // Only toggle via click if the window width is mobile size
                    if (window.innerWidth <= 480) {
                        setActiveDropdown(activeDropdown === "resources" ? null : "resources");
                    }       
                    }}>
                    Resources ▾
                    </div>
                <ul className={`dropdown-menu ${activeDropdown === "resources" ? "open" : ""}`}>
                    <li><NavLink to="/self" onClick={closeAllMenus}>SELF</NavLink></li>
                    <li><NavLink to="/publicdocuments" onClick={closeAllMenus}>Public Documents</NavLink></li>
                </ul>
            </li>

            <li>
                <NavLink to="/contact"  onClick={closeAllMenus}>Contact</NavLink>
            </li>

            <li>
                <NavLink to="https://ess-bookings.square.site/" target='_blank' onClick={closeAllMenus}>Bookings</NavLink>
            </li>

            <li>
                <a
                    href="https://instagram.com/ess_uofc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram-btn"
                >
                    <FaInstagram />
                </a>
            </li>

            <li>
                <NavLink to="/store" className='store-btn' onClick={closeAllMenus}>Store</NavLink>
            </li>

        </ul>
    </nav>
};

export default Navbar