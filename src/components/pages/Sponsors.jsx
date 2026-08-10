import React from 'react'


import "./Sponsors.css";

import SponsorsCard from "../../components/sponsors/SponsorsCard";
import SponsorsData from "../../components/sponsors/sponsorsData";

function Sponsors() {
  return (
    <div className="sponsors-page">

            <section className="sponsors-header">
                <div className="sponsors-text">
                    <h1><span>Our Sponsors</span><br></br>Our Partners.</h1>

                    <p>
                       Our sponsors play a key role in supporting engineering 
                       students and building a stronger community. 
                       Thank you for your support! 
                    </p>
                </div>
                <div className="sponsors-image">
                  <img src="src\assets\Schulic School of Engineering Picture.jpg"></img>
                </div>
 
            </section>


<section className="why-partner">
              <div className='why-partner-container'>
                  <div className="why-partner-text">

                      <h3>Why Partner With ESS?</h3>

                      <p>
                        Partnering with ESS connects your organization with over 4000 engineering students through events, mentorship, branding opportunities, and more.
                      </p>

                  </div>

              <div className="ess-pillars">

                  <div className="pillar">
                      <img src="src\assets\icons\engage.png" alt="" />
                      <h3>ENGAGE</h3>
                      <p>
                        Connect with the next generation of engineers
                      </p>
                  </div>

                  <div className="pillar">
                      <img src="src\assets\icons\promote.png" alt="" />
                      <h3>PROMOTE</h3>
                      <p>
                        Increase brand visibility on campus
                      </p>
                  </div>

                  <div className="pillar">
                      <img src="src\assets\icons\support.png" alt="" />
                      <h3>SUPPORT</h3>
                      <p>
                        Invest in student success and innovations
                      </p>
                  </div>

                  <div className="pillar">
                      <img src="src\assets\icons\build.png" alt="" />
                      <h3>BUILD</h3>
                      <p>
                        Build long-term partnerships
                      </p>
                  </div>
              </div>
              </div>

          </section>

          
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



          
        </div>
  )
}

export default Sponsors