import React, { useState } from 'react'
import "./departmentsCard.css";
import { FaLinkedin, FaEnvelope, FaGlobe, FaInstagram } from "react-icons/fa";


function DepartmentsCard({ member }) {
    const [showDescription, setShowDescription] = useState(false);

    return (

        <div className="department-card">

                <img
                    src={member.image}
                    alt={member.name}
                />

            <div className="department-content">

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


                    {member.email && (    
                    <a href={`mailto:${member.email}`}>

                        <FaEnvelope />

                    </a>
                    )}

                </div>

            </div>

        </div>

    );

}

export default DepartmentsCard;