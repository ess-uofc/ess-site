import React from "react";
import "./CommunitySponsors.css";

import { FaGlobe } from "react-icons/fa";

import communitySponsors from "./CommunitySponsorsData";

function CommunitySponsors() {

    return (
        <section className="community-sponsors-section">

            <div className="community-sponsors-container">

                <h2>Community & Sponsor Benefits</h2>

                <p className="community-sponsors-intro">
                    ESS members can take advantage of exclusive discounts and
                    benefits from our community partners and sponsors.
                </p>

                <div className="community-sponsors-grid">

                    {communitySponsors.map((member) => (

                        <div
                            className="community-sponsor-card"
                            key={member.id}
                        >

                            <div className="community-sponsor-image">

                                <img
                                    src={member.image}
                                    alt={member.name || "ESS Community Sponsor"}
                                />

                            </div>

                            <div className="community-sponsor-content">

                                {member.name && (
                                    <h3>{member.name}</h3>
                                )}

                                <p>
                                    {member.description}
                                </p>

                                {member.website && (

                                    <div className="sponsor-icons">

                                        <a
                                            href={member.website}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={`${member.name || "Sponsor"} website`}
                                        >
                                            <FaGlobe />
                                        </a>

                                    </div>

                                )}

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default CommunitySponsors;