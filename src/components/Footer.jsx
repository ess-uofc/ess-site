import React from "react";
import "./Footer.css";
import {Link, NavLink} from 'react-router-dom';

import { FaInstagram, FaDiscord, FaGlobe, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import essLogo from "../assets/ess-logo.png"

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* Logo Section */}
                <div className="footer-brand">

                    <img 
                        src={essLogo} 
                        alt="ESS Logo"
                    />

                </div>


                {/* Quick Links */}
                <div className="footer-column">

                    <h3>QUICK LINKS</h3>

                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/council">Council</NavLink>
                    <NavLink to="/events">Events</NavLink>
                    <NavLink to="/conferences">Conferences</NavLink>
                    <NavLink to="/contact">Contact</NavLink>

                </div>


                {/* Resources */}
                <div className="footer-column">

                    <h3>RESOURCES</h3>

                    <NavLink to="/publicdocuments">Public Documents</NavLink>
                    <NavLink to="/departments">Departments</NavLink>
                    <NavLink to="/self">SELF</NavLink>
                    <NavLink to="/bookings">Bookings</NavLink>
                    <NavLink to="/sponsors">Sponsors</NavLink>

                </div>


                {/* Contact */}
                <div className="footer-column contact">

                    <h3>CONTACT US</h3>

                    <p>
                        <FaMapMarkerAlt />
                        Schulich School of Engineering
                    </p>

                    <p>
                        <a href="mailto:info@essucalgary.com">
                            <FaEnvelope />
                            info@essucalgary.com
                        </a>
                    </p>

                    <p>
                        <a href="tel:+14032205737">
                            <FaPhone />
                            (403) 220-5737
                        </a>
                    </p>

                </div>

            </div>


            {/* Bottom Bar */}

            <div className="footer-bottom">

                <p>
                    Copyright © 2026 Engineering Students' Society 
                    University of Calgary. All Rights Reserved
                </p>


                <div className="social-icons">

                    <a href="https://www.instagram.com/ess_uofc/">
                        <FaInstagram />
                    </a>

                    <a href="https://discord.com/invite/9mUubJU">
                        <FaDiscord />
                    </a>

                    <a href="https://www.linkedin.com/company/engineering-students%27-society-u-of-c-/">
                        <FaLinkedin />
                    </a>

                </div>

            </div>


        </footer>
    );
}

export default Footer;