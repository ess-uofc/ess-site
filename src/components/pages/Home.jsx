import React from 'react'
import "./Home.css";
import {Link, NavLink} from 'react-router-dom';
import AboutSection from "../home/AboutSection";
import MembershipSection from "../home/MembershipSection";
import NewsSection from "../home/NewsSection";
import WhoAreWe from "../home/WhoAreWe";




const Home = () => {
  return (
    
    <div>

    <AboutSection />
    <NewsSection />
    <MembershipSection />
    <WhoAreWe />


    </div>
  )    
}

export default Home