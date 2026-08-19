import React from "react";
import "./Footer.css";

import { FaInstagram, FaDiscord, FaGlobe, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* Logo Section */}
                <div className="footer-brand">

                    <img 
                        src="src\assets\ess-logo.png" 
                        alt="ESS Logo"
                    />

                </div>


                {/* Quick Links */}
                <div className="footer-column">

                    <h3>QUICK LINKS</h3>

                    <a href="/">Home</a>
                    <a href="/council">Council</a>
                    <a href="/events">Events</a>
                    <a href="/conferences">Conferences</a>
                    <a href="/contact">Contact</a>

                </div>


                {/* Resources */}
                <div className="footer-column">

                    <h3>RESOURCES</h3>

                    <a href="/publicdocuments">Public Documents</a>
                    <a href="/departments">Departments</a>
                    <a href="/self">SELF</a>
                    <a href="/bookings">Bookings</a>
                    <a href="/sponsors">Sponsors</a>

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