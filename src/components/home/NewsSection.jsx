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
                    <h3>First Year Rep Applications</h3>

                    <p className="event-date">Apply Before Sept 5th 11:59pm</p>


                    <p>
                        Calling all first years! 
                        Want to get involved? Meet new people? Develop career-ready skills? Here's your chance!
                    </p>

                    <Link to="/applications" className="learn-more">
                        Learn More →
                    </Link>

                </div>

            </div>

            

            <div className="news-card">

                {/* <img src="/images/event3.jpg" alt="ESS Elections" /> */}

                <div className="news-content">
                    <h3>FROSH Week Club Fair</h3>

                    <p className="event-date">September 2nd at 10am</p>

                    <p>
                        This club fair is features Engineering societies and clubs and allows new students and returning friends to understand the different opportunities U of C offers.
                    </p>

                    <a href="/events" className="learn-more">
                        Learn More →
                    </a>

                </div>

            </div>

            <div className="news-card">

                {/* <img src="/images/event3.jpg" alt="ESS Elections" /> */}

                <div className="news-content">
                    <h3>FROSH Jeopardy Trivia Night</h3>

                    <p className="event-date">September 2nd at 6pm</p>

                    <p>
                        Waybionic FROSH Jeopardy Trivia Night
                    </p>

                    <a href="/events" className="learn-more">
                        Learn More →
                    </a>

                </div>

            </div>

            <div className="news-card">

                {/* <img src="/images/event3.jpg" alt="ESS Elections" /> */}

                <div className="news-content">
                    <h3>Tap The Town</h3>

                    <p className="event-date">September 4 at 6:30pm</p>

                    <p>
                        Meet new people and experience Calgary's night life
                    </p>

                    <a href="/events" className="learn-more">
                        Learn More →
                    </a>

                </div>

            </div>

           
            </div>

        </div>



</section>
  )
}

export default NewsSection