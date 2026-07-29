import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import membershipCard from "../../assets/ESS Member Card.jpg";

function AboutSection() {
  return (
    <section className="membership">

    <div className="membership-text">

        <h1>BECOME A MEMBER!</h1>

        <p>
            Access to exclusive events, discounts, networking opportunities,
            engineering resources, and much more by becoming an ESS member.
        </p>

        <button className="membership-btn">
            Purchase Membership
        </button>

    </div>

    <div className="membership-image">
        <img
            src={membershipCard}
            alt="ESS Membership Card"
        />
    </div>

</section>
  )
}

export default AboutSection