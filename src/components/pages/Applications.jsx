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
                <h3>No applications are available at the moment</h3>
                <p>Please check back later for new opportunities!</p>
            </div>

        </div>

      </section>
    </section>
  )
}

export default Applications