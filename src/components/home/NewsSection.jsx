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

                <img src="/images/event1.jpg" alt="Engineering BBQ" />

                <div className="news-content">
                    <h3>Engolympics</h3>

                    <p className="event-date">September 12, 2026</p>


                    <p>
                        Join fellow engineering students for the annual
                        olympic games, and prizes.
                    </p>

                    <a href="/events" className="learn-more">
                        Learn More →
                    </a>

                </div>

            </div>

            <div className="news-card">

                <img src="/images/event2.jpg" alt="Industry Night" />

                <div className="news-content">
                    <h3>Industry Night</h3>

                    <p className="event-date">September 23, 2026</p>

                    <p>
                        Meet recruiters from top engineering companies and
                        learn about internships and career opportunities.
                    </p>

                    <a href="/events" className="learn-more">
                        Learn More →
                    </a>

                </div>

            </div>

            <div className="news-card">

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

            </div>

        </div>

    </div>

</section>
  )
}

export default NewsSection