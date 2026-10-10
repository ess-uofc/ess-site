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
                    <h3>YCR Info Night</h3>

                    <p className="event-date">Oct 15 10AM - 3PM</p>

                    <p>
                        Learn more about the industry, network with professionals, and get job-ready!! Bring your resume too!
                    </p>

                    <Link to="/events" className="learn-more">
                        Learn More →
                    </Link>

                </div>

            </div>
               

            <div className="news-card">

                {/* <img src={FYR} alt="Engineering BBQ" /> */}

                <div className="news-content">
                    <h3>Conference on Diversity in Engineering (CDE)</h3>

                    <p className="event-date">Apply Before Due Oct 12</p>


                    <p>
                        Over four days you will join more than 150 engineering students from across Canada to delve into topics surrounding diversity, equity, and belonging in engineering through collaboration, reflection, and problem-solving.
                    </p>

                    <Link to="/applications" className="learn-more">
                        Learn More →
                    </Link>

                </div>

            </div>

              <div className="news-card">

                <div className="news-content">
                    <h3>A Day in the Life: Meet & Network with Transportation Engineers</h3>

                    <p className="event-date">Nov 3 5:00PM-6:30PM</p>

                    <p>
                      Join ITE to hear from transportation engineering professionals about their career journeys, day-to-day work, and the projects shaping Calgary and surrounding communities.
                    </p>

                    <Link to="/events" className="learn-more">
                        Learn More →
                    </Link>

                </div>

            </div>

            <div className="news-card">

                <div className="news-content">
                    <h3>Study Abroad Info Night</h3>

                    <p className="event-date">Nov 5 4:30PM-6:30PM</p>

                    <p>
                      Enjoy beverages and food a chance to learn more and ask questions about the study abroad program.
                    </p>

                    <Link to="/events" className="learn-more">
                        Learn More →
                    </Link>

                </div>

            </div>

            <div className="news-card">

                <div className="news-content">
                    <h3>Lectures on Tap - Luis Alvarado</h3>

                    <p className="event-date">Nov 6 11AM-1PM</p>

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