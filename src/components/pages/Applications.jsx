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

            <h3>Conference on Diversity in Engineering (CDE)</h3>

            <p className="due-date">
                Application deadline: <strong>October 18th at 11:59 PM</strong><br></br>
                Event Date: <strong>November 20th - 23rd, 2026</strong>
            </p>

            <p className="description">
                Over four days you will join more than 150 engineering students from across Canada to delve into topics surrounding diversity, equity, and belonging in engineering through collaboration, reflection, and problem-solving. Our three streams: Breaking Barriers, Cementing Connections, and Driving Change, will invite you to explore the impact you can have on the engineering profession beyond the limits of circuit boards, stress tests, and code errors.
            </p>

            <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe6h3sYI0pR4smt37cWwzOp3yjTDazKLL-OzlYQ6WVqo9QIQw/viewform"
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