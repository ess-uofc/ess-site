import React from "react";
import "./Contact.css";

import contactHero from "../../assets/202223-council-1-banner.png";

import mapIcon from "../../assets/icons/map.png";
import emailIcon from "../../assets/icons/email.png";
import clockIcon from "../../assets/icons/clock.png";
import instagramIcon from "../../assets/icons/instagram.png";

function Contact() {
    return (
        <section className="contact-page">

            <section className="contact-hero">

                <div className="contact-text">
                    <h1>
                        Contact <span>ESS.</span>
                    </h1>

                    <p>
                        We'd love to hear from you! Whether you have
                        questions, feedback, or just want to say hello,
                        feel free to reach out.
                    </p>
                </div>

                <div className="contact-image">
                    <img
                        src={contactHero}
                        alt="Engineering Students' Society"
                    />
                </div>

            </section>

            <section className="contact-info">

                <h2>GET IN TOUCH</h2>

                <div className="contact-grid">

                    <div className="contact-card">

                        <div className="icon-circle">
                            <img src={mapIcon} alt="" />
                        </div>

                        <h3>VISIT US</h3>

                        <p>
                            Engineering Building
                            <br />
                            Room ENE 134A
                            <br />
                            2500 University Drive NW, Calgary, University of Calgary
                        </p>

                    </div>

                    <div className="contact-card">

                        <div className="icon-circle">
                            <img src={emailIcon} alt="" />
                        </div>

                        <h3>EMAIL US</h3>

                        <p>
                            <a href="mailto:ess@essucalgary.com">
                                ess@essucalgary.com
                            </a>
                        </p>

                    </div>

                    <div className="contact-card">

                        <div className="icon-circle">
                            <img src={clockIcon} alt="" />
                        </div>

                        <h3>OFFICE HOURS</h3>

                        <p>
                            Monday - Friday
                            <br />
                            10:30 AM - 3:30 PM
                            <br /><br />
                            Closed on weekends,
                            holidays, and university
                            breaks unless otherwise
                            specified.
                        </p>

                    </div>

                    <div className="contact-card">

                        <div className="icon-circle">
                            <img src={instagramIcon} alt="" />
                        </div>

                        <h3>Follow Us</h3>

                        <p>
                            <a
                                href="https://instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                @essucalgary
                            </a>
                        </p>

                    </div>

                </div>

            </section>

        </section>
    );
}

export default Contact;