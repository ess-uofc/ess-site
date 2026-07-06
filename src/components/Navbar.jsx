import React, { useState } from 'react';
import {Link, NavLink} from 'react-router-dom';
import "./Navbar.css";
import logo from "../assets/ess-logo.png";

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
            
            <li className="dropdown">
                <div onClick={() => {
                    // Only toggle via click if the window width is mobile size
                    if (window.innerWidth <= 480) {
                        setActiveDropdown(activeDropdown === "getInvolved" ? null : "getInvolved");
                    }       
                    }}>
                    Get Involved ▾
                    </div>
                <ul className={`dropdown-menu ${activeDropdown === "getInvolved" ? "open" : ""}`}>
                    <li><NavLink to="/applications" onClick={closeAllMenus}>Applications</NavLink></li>
                    <li><NavLink to="/conferences" onClick={closeAllMenus}>Conferences</NavLink></li>
                </ul>
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
                <NavLink to="/store"  onClick={closeAllMenus}>Store</NavLink>
            </li>

        </ul>
    </nav>
};

export default Navbar