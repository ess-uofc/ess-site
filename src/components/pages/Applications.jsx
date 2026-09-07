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

            <h3>Schulich Engineering Competition</h3>

            <p className="due-date">
                Application deadline: <strong>September 27th at 11:59 PM</strong>
            </p>

            <p className="description">
                Categories to Compete in are: Jr. Design, Sr. Design, Competitive Programming, Innovative Design, Consulting
            </p>

            <a
                href="https://forms.gle/RLWuic2JS1V6JHQ88"
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