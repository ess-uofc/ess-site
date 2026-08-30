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

            <div className="application-card-top">
                <span className="application-status">NOW OPEN</span>
            </div>

            <h3>First Year Rep Applications</h3>

            <p className="due-date">
                Application deadline: <strong>September 5th at 11:59 PM</strong>
            </p>

            <p className="description">
                Calling all first years!

                Want to get involved? Meet new people? Develop career-ready
                skills? Here's your chance!

                Apply to be a first year rep for the Engineering Students'
                Society and be a part of Schulich history.
            </p>

            <a
                href="https://forms.gle/82ewFgzuj77QBuZU8"
                target="_blank"
                rel="noreferrer"
                className="application-btn"
            >
                Apply Now →
            </a>

        </div>

        </div>

      </section>
    </section>
  )
}

export default Applications