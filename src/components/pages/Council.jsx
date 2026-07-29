import React from 'react'

import "./Council.css";

import CouncilCard from "../../components/council/CouncilCard";
import councilMembers from "../../components/council/councilData";

function Council(){

    const president =
        councilMembers.filter(member => member.role==="President");

    const vps =
        councilMembers.filter(member => member.role.startsWith("VP"));

    const commissioners =
        councilMembers.filter(member => member.role.includes("Commissioner") || member.role.includes("Director"));

    const firstYears =
        councilMembers.filter(member => member.role==="First Year Representative");

    return(

        <div className="council-page">

            <h1>Meet Your ESS Council</h1>

            <p>
                The Engineering Students' Society Council is a group of student volunteers dedicated to the improvement of your time at the Schulich School of Engineering. We are a diverse group of students just like you, doing our best to be leaders for the engineering community here at the UofC. Our Board of Directors consists of the ESS President, 8 portfolio executives, 9 departmental representatives elected by you, and 10 first year representatives. Alongside our commissioners, we advocate on behalf of engineering students to the school, host social and professional events, and provide an array of services aimed at making your time at Schulich enjoyable!

                We can't wait to see you around!

                -The ESS Council
            </p>


            <section>

                <h2>EXECUTIVE TEAM</h2>

                <div className="council-grid">

                    {president.map(member=>(
                        <CouncilCard
                            key={member.id}
                            member={member}
                        />
                    ))}

                </div>

            </section>


            <section>

                  <div className="council-grid">

                    {vps.map(member=>(
                        <CouncilCard
                            key={member.id}
                            member={member}
                        />
                    ))}

                </div>

            </section>


            <section>

                <h2>COMMMISSIONERS</h2>

                <div className="council-grid">

                    {commissioners.map(member=>(
                        <CouncilCard
                            key={member.id}
                            member={member}
                        />
                    ))}

                </div>

            </section>


            <section>

                <h2>FIRST YEAR REPRESENTATIVES</h2>

                <div className="council-grid">

                    {firstYears.map(member=>(
                        <CouncilCard
                            key={member.id}
                            member={member}
                        />
                    ))}

                </div>

            </section>

        </div>

    );

}

export default Council;