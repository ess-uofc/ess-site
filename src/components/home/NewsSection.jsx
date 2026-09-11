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

                {/* <img src={FYR} alt="Engineering BBQ" /> */}

                <div className="news-content">
                    <h3>Schulich Engineering Competition</h3>

                    <p className="event-date">Apply Before Sept 27th 11:59pm</p>


                    <p>
                        Interested in competing against other students in multiple categories? This is for you!
                    </p>

                    <Link to="/applications" className="learn-more">
                        Learn More →
                    </Link>

                </div>

            </div>

            <div className="news-card">

                {/* <img src={FYR} alt="Engineering BBQ" /> */}

                <div className="news-content">
                    <h3>Industry Spotlight Events</h3>

                    <p className="event-date">Sep 29 3 PM - 5 PM</p>


                    <p>
                        Meet engineers from diverse backgrounds and learn what a day in their career looks like
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