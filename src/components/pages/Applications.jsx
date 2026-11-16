import React from 'react'
import "./Applications.css"

function Applications() {
  return (
    <section className='application-page'>
      <section className='application-header'>
        <h1>Get involved with the ESS!</h1>
        <p>The Engineering Students' Society is an entirely volunteer based organization. Positions with the society are available to all members of the Engineering Students' Society. If you have any questions or want to learn more about the society, feel free to drop us a line.</p>
      </section>

      <section className="applications">

        <div className="applications-container">

          



          <div className="application-card">

            {/* <div className="application-card-top">
                <span className="application-status">NOW OPEN</span>
            </div> */}

            <h3>There are current open applications. Please come back later! </h3>

            {/* <p className="due-date">
                Application deadline: <strong>November 15th</strong><br></br>
                {/* Event Date: <strong>November 20th - 23rd, 2026</strong> 
            </p> */}

            {/* <p className="description">
                The Canadian Engineering Leadership Conference (CELC) brings together 150-200 delegates from over 50 engineering schools for a weekend of networking, professional development, and collaboration. From industry speakers and engaging panels to student-led discussions, CELC offers the opportunity to learn from industry professionals, exchange ideas, and connect with student leaders from across the country.
            </p>

            <a
                href="https://forms.gle/ZM66Ft8iUzjqxVRJ8"
                target="_blank"
                rel="noreferrer"
                className="application-btn"
            >
                Apply Now →
            </a> */}

          </div>

        </div>

      </section>
    </section>
  )
}

export default Applications