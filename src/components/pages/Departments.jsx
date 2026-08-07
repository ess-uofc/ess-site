import React from "react";
import "./Departments.css";

import DepartmentsCard from "../../components/departments/DepartmentsCard";
import departmentsData from "../../components/departments/departmentsData";


function Departments() {
    return (
        <div className="departments-page">

            <section className="departments-header">
                <div className="departments-text">
                    <h1>Engineering Department Societies</h1>

                    <p>
                        The Engineering Students' Society works closely with each
                        department society to support students academically,
                        professionally, and socially. Learn more about each society
                        and how to get involved.
                    </p>
                </div>
                <div className="departments-image">
                  <img src="src\assets\Schulic School of Engineering Picture.jpg"></img>
                </div>
 
            </section>
          <section className="departments-grid">

                {departmentsData.map((member) => (
                    <DepartmentsCard
                        key={member.id}
                        member={member}
                    />
                ))}

            </section>

        </div>
    );
}

export default Departments;