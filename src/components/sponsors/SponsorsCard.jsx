import React, { useState } from 'react'
import "./SponsorsCard.css";
import { FaLinkedin, FaEnvelope, FaGlobe, FaInstagram, FaFacebook } from "react-icons/fa";


function SponsorsCard({ member }) {
    const [showDescription, setShowDescription] = useState(false);

    return (

        <div className="sponsors-card">

                <img
                    src={member.image}
                    alt={member.name}
                />

            <div className="sponsors-content">

                <h3>{member.name}</h3>


                <button 
                    className="expand-button"
                    onClick={() => setShowDescription(!showDescription)}
                >
                    {showDescription ? "Show Less" : "See More"}
                </button>


                {showDescription && (

                    <p className="description">

                        {member.description}

                    </p>

                )}
                
                <div className="department-icons">

                    {member.website && (
                    <a href={member.website} target="_blank" rel="noreferrer">
                        <FaGlobe />
                    </a>
                    )}


                    {member.instagram && (
                    <a
                        href={member.instagram}
                        target="_blank"
                        rel="noreferrer">

                        <FaInstagram />

                    </a>
                    )}


                    {member.linkedin && (    
                    <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer">

                        <FaLinkedin />

                    </a>
                    )}

                    {member.facebook && (    
                    <a 
                        href={member.facebook}
                        target="_blank"
                        rel="noreferrer">

                        <FaFacebook />

                    </a>
                    )}

                </div>

            </div>

        </div>

    );

}

export default SponsorsCard;