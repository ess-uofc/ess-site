
import React from 'react';
import "./Membership.css";

import CommunitySponsors from "../community sponsors/CommunitySponsors";

function Membership() {
  return (
    <div className="membership-page">

      {/* Header */}
      <section className="membership-header">
        <h1>ESS Membership</h1>
        <p>
          Support the Engineering Students' Society by becoming a member today!
          The Engineering Students' Society works hard to enrich the engineering
          student experience for all engineering students by hosting a variety
          of academic, professional, and social events throughout the year.
          Members will enjoy perks such as discounted events, merchandise
          discounts, partner discounts, and early access to new ESS products
          and services.
        </p>
        <img></img>
      </section>


      {/* PURCHASE MEMBERSHIP */}
      <section className="membership-purchase">
        <h2>Purchase Membership</h2>

        <p>
          To purchase a membership in person, please visit the ESS office
          at ENE134A during office hours (10:30 AM - 3:30 PM on weekdays,
          excluding holidays and university breaks).
        </p>


      </section>

      {/* Community Sponsors */}

      <CommunitySponsors />


      {/* Opportunities & Discounts */}
      <section className="opportunities-and-discounts">

        <div className="opportunities">
          <h2>Conference & Event Opportunities</h2>

          <p>
            ESS members receive access to exclusive opportunities, including:
          </p>

          <ul>
            <li>
              Apply for CFES and WEC engineering student conferences
            </li>
            <li>
              Participate in the Schulich Engineering Competition
            </li>
            <li>
              Receive discounts for Engineering Dinner events during the
              winter semester
            </li>
          </ul>
        </div>


        <div className="discounts">
          <h2>Additional Amenities & Discounts</h2>

          <ul>
            <li>Significant discounts on all ESS merchandise, including patches</li>
            <li>Free printing of 10 double-sided sheets of paper per day</li>
            <li>Access to hot water</li>
            <li>Charging cables, including USB-C and Lightning</li>
            <li>Free rental of calculators, lab coats, and projectors</li>
          </ul>
        </div>

      </section>

    </div>
  );
}

export default Membership;

