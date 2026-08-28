import React from "react";

import "./Sponsors.css";

import SponsorsCard from "../../components/sponsors/SponsorsCard";
import SponsorsData from "../../components/sponsors/sponsorsData";
import CommunitySponsors from "../community sponsors/CommunitySponsors";

// Images
import sponsorsHeader from "../../assets/Schulic School of Engineering Picture.jpg";
import engageIcon from "../../assets/icons/engage.png";
import promoteIcon from "../../assets/icons/promote.png";
import supportIcon from "../../assets/icons/support.png";
import buildIcon from "../../assets/icons/build.png";

function Sponsors() {
  return (
    <div className="sponsors-page">

      {/* =========================
          HEADER
      ========================== */}
      <section className="sponsors-header">

        <div className="sponsors-text">

          <h1>
            <span>Our Sponsors</span>
            <br />
            Our Partners.
          </h1>

          <p>
            Our sponsors play a key role in supporting engineering
            students and building a stronger community.
            Thank you for your support!
          </p>

        </div>

        <div className="sponsors-image">

          <img
            src={sponsorsHeader}
            alt="Schulich School of Engineering"
          />

        </div>

      </section>


      {/* =========================
          WHY PARTNER WITH ESS
      ========================== */}
      <section className="why-partner">

        <div className="why-partner-container">

          <div className="why-partner-text">

            <h3>Why Partner With ESS?</h3>

            <p>
              Partnering with ESS connects your organization with over
              4000 engineering students through events, mentorship,
              branding opportunities, and more.
            </p>

          </div>


          <div className="ess-pillars">

            {/* ENGAGE */}
            <div className="pillar">

              <img
                src={engageIcon}
                alt="Engage"
              />

              <h3>ENGAGE</h3>

              <p>
                Connect with the next generation of engineers
              </p>

            </div>


            {/* PROMOTE */}
            <div className="pillar">

              <img
                src={promoteIcon}
                alt="Promote"
              />

              <h3>PROMOTE</h3>

              <p>
                Increase brand visibility on campus
              </p>

            </div>


            {/* SUPPORT */}
            <div className="pillar">

              <img
                src={supportIcon}
                alt="Support"
              />

              <h3>SUPPORT</h3>

              <p>
                Invest in student success and innovations
              </p>

            </div>


            {/* BUILD */}
            <div className="pillar">

              <img
                src={buildIcon}
                alt="Build"
              />

              <h3>BUILD</h3>

              <p>
                Build long-term partnerships
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          OUR SPONSORS
      ========================== */}
      <div className="sponsors">

        <section className="sponsors-grid">

          <h2>OUR SPONSORS</h2>

          {SponsorsData.map((member) => (

            <SponsorsCard
              key={member.id}
              member={member}
            />

          ))}

        </section>

      </div>


      {/* =========================
          COMMUNITY SPONSORS
      ========================== */}
      <CommunitySponsors />

    </div>
  );
}

export default Sponsors;