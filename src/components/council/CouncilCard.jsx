import React, { useState } from 'react'
import "./CouncilCard.css";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

function CouncilCard({ member }) {
    const [showDescription, setShowDescription] = useState(false);

    return (

        <div className="council-card">
            
            <img
                src={member.image}
                alt={member.name}
            />

            <div className="card-content">

                <h3>{member.name}</h3>

                <h4>{member.role}</h4>

                <p className="member-info">

                    {member.year} • {member.major}

                </p>

                <button 
                    className="expand-button"
                    onClick={() => setShowDescription(!showDescription)}
                >
                    {showDescription ? "Show Less" : "Read More"}
                </button>


                {showDescription && (

                    <p className="description">

                        {member.description}

                    </p>

                )}
                
                <div className="card-icons">

                   {member.linkedin && (
                        <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedin />
                        </a>
                    )}

                    <a href={`mailto:${member.email}`}>

                        <FaEnvelope />

                    </a>

                </div>

            </div>

        </div>

    );

}

export default CouncilCard;