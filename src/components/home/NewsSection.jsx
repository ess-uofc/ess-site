import React from 'react'
import {Link, NavLink} from 'react-router-dom';

function NewsSection() {
  return (
    <section className="news-section">

    <div className="news-container">

        <div className="news-header">

            <h1>News & Events</h1>

            <a href="/events" className="view-all">
                View All Events →
            </a>

        </div>

        <div className="news-grid">

            <div className="news-card">

                {/* <img src="/images/event1.jpg" alt="Engineering BBQ" /> */}

                <div className="news-content">
                    <h3>Welcome Week</h3>

                    <p className="event-date">Starting Sept 1, 2026</p>


                    <p>
                        Join fellow engineering students for the annual
                        welcome week events, games, and a lot of fun.
                    </p>

                    <a href="/events" className="learn-more">
                        Learn More →
                    </a>

                </div>

            </div>

            <div className="news-card">

                {/* <img src="/images/event2.jpg" alt="Industry Night" /> */}

                <div className="news-content">
                    <h3>Career Fair</h3>

                    <p className="event-date">October 15, 2026</p>

                    <p>
                        As one of the largest Engineering based career fairs in Western Canada, the ESS event is a popular and and eager way for students to connect with the industry. 
                    </p>

                    <a href="/events" className="learn-more">
                        Learn More →
                    </a>

                </div>

            </div>

            {/* <div className="news-card">

                <img src="/images/event3.jpg" alt="ESS Elections" />

                <div className="news-content">
                    <h3>ESS Elections</h3>

                    <p className="event-date">October 8, 2026</p>

                    <p>
                        Vote for your next Engineering Students' Society
                        representatives and have your voice heard.
                    </p>

                    <a href="/events" className="learn-more">
                        Learn More →
                    </a>

                </div>

            </div> */}

        </div>

    </div>

</section>
  )
}

export default NewsSection