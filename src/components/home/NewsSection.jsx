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

            <div className="news-card">

                {/* <img src={FYR} alt="Engineering BBQ" /> */}

                <div className="news-content">
                    <h3>YCR Info Night</h3>

                    <p className="event-date">Oct 7 11:30AM</p>


                    <p>
                        Come join us at YCR info night in the Engg Lounge. Socialize with people and enjoy free shawarma provided (while supply lasts)
                    </p>

                    <Link to="/events" className="learn-more">
                        Learn More →
                    </Link>

                </div>

            </div>

               <div className="news-card">

                {/* <img src={FYR} alt="Engineering BBQ" /> */}

                <div className="news-content">
                    <h3>How should the school spend additional resource for YOU?</h3>

                    <p className="event-date">Oct 7 11:30AM</p>


                    <p>
                        YOU help decide where additional resources should go
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