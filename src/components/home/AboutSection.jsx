import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import aboutPhoto from "../../assets/202324-council.jpg";

function AboutSection() {
  return (
    <section className="home-about">

      <div className="about-text-box">
        <h1>Building Community.<br></br>Creating Impact.</h1>

        <p>
          The Engineering Student's Society (ESS) represents, supports, 
          and empowers engineering students at the University of Calgary
          through advocacy, events, academic resources, and opportunities.
        </p>

        <Link to="/council">
        <button className="about-btn">
          Meet the Council
        </button>
        </Link>

      </div>

      <div className="about-image">
        <img src={aboutPhoto} alt="ESS Council" />
      </div>


      <div>

        
      </div>


    </section>
  )
}

export default AboutSection