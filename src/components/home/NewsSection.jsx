import React from 'react'
import {Link, NavLink} from 'react-router-dom';

import FYR from "../../assets/news and updates/FYR.png"

function NewsSection() {
  return (
    <section className="news-section">

    <div className="news-container">

        <div className="news-header">

            <h1>News & Events</h1>

            <Link to="/events" className="view-all">
                View All Events →
            </Link>

        </div>

        <div className="news-grid">
            

        
            <div className="news-card">

                <div className="news-content">
                    <h3> Mental Health and Wellness Survey</h3>
                    <p className="event-date"></p>

                    <p>
                       Complete a 5 minute survey about mental health and wellness support and get a chance to win bake chef gift!
                    </p>

                    <Link to="/events" className="learn-more">
                        Learn More →
                    </Link>

                </div>

            </div>

             <div className="news-card">

                <div className="news-content">
                    <h3>I Scream for Ice Cream</h3>
                    <p className="event-date">Nov 20 11AM - until supply lasts</p>

                    <p>
                       Failed a midterm? It's ok we all have, that's why we want to give you a consolation prize in the form of free ice cream.
                    </p>

                    <Link to="/events" className="learn-more">
                        Learn More →
                    </Link>

                </div>

            </div>

            <div className="news-card">

                <div className="news-content">
                    <h3>ABB Info Night</h3>

                    <p className="event-date">Nov 25 11AM</p>

                    <p>
                       Come learn about global leader in electrification and automation and connect with industry professionals. **Food will be provided.
                    </p>

                    <Link to="/events" className="learn-more">
                        Learn More →
                    </Link>

                </div>

            </div>

            <div className="news-card">

                <div className="news-content">
                    <h3>Lectures on Tap - Omar Boursalie</h3>

                    <p className="event-date">Nov 27 11AM-1PM</p>

                    <p>
                       Enjoy beverages and a chance to learn more about your professors interests outside of class time.
                    </p>

                    <Link to="/events" className="learn-more">
                        Learn More →
                    </Link>

                </div>

            </div>

            

           
        </div>

    </div>

</section>
  )
}

export default NewsSection