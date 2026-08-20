import React from 'react'
import "./SELF.css";


function SELF() {
  return (
    <div className="self-page">
      <div className="self-hero">

        <div className="self-hero-text">
            <h1><span>SELF</span> - Student Experiential Learning Fund</h1>
        </div>

        <div className="self-hero-image">
            <img
                src="src\assets\202223-council-1-banner.png"
                alt="Student Experiential Learning Fund"
            />
        </div>

      </div>

      <div className='self-about'>
        <h2>About the Fund</h2>
        <p>The Student Experiential Learning Fund (SELF) enables learning opportunities outside the classroom for the clubs and teams of the Schulich School of Engineering (SSE). The Schulich School of Engineering aims to allocate at least $120,000 annually through SELF to improve the Experiential Learning of the Engineering Student. Funds are normally allocated each fiscal year. <br></br>Experiential Learning (EL) is learning-by-doing that bridges knowledge and experience through critical reflection. Using intentionally designed and assessed activities, EL enables students to increase understanding, challenge and advance perspectives, clarify values, develop and hone their skills and promote new ways of thinking and doing. These opportunities prepare students to lead and/or respond to change and thrive in an increasingly complex world.</p>
      </div>

      
      
      <div className="self-documents">
        <h2>SELF Documents</h2>
        <ul>
            <a href='https://drive.google.com/file/d/1j0NYxDX9N6NuVcOEmUFZHupXegyb1dAz/view?usp=drive_link'><li>SELF Policy</li></a>
            <li><a href="https://drive.google.com/uc?export=download&amp;id=1Cp3U-inwozhLcXVaDgGUFenjIQsJ_lLO">Application I</a></li>
            <li><a href="https://drive.google.com/uc?export=download&amp;id=1MKIwP0hxg2tMOs69DqHe5xfXZwzNE0FC">Application II</a></li>
            <li><a href="https://drive.google.com/uc?export=download&amp;id=1ZzvlRGocqbx7jtY7LPAgrytf8jKblQlm">Application III</a></li>
            <li><a href="https://docs.google.com/spreadsheets/d/197_bpNY8bvEGTWfPq7ub3mScDzunkHS0/edit?usp=drive_web&amp;ouid=111920029876893852073&amp;rtpof=true" target='_blank'>SELF Budget</a></li>
        </ul>
      </div>

      <div className="timetable">
        <h2>Timetable</h2>

        <table className="self-table">
            <thead>
                <tr>
                    <th>Funding Competition</th>
                    <th>Application Deadline</th>
                    <th>Committee Meeting</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Funding Competition #1</td>
                    <td>11:59 pm, July 31</td>
                    <td>August</td>
                </tr>

                <tr>
                    <td>Funding Competition #2</td>
                    <td>11:59 pm, August 31</td>
                    <td>September</td>
                </tr>

                <tr>
                    <td>Funding Competition #3</td>
                    <td>11:59 pm, September 30</td>
                    <td>October</td>
                </tr>

                <tr>
                    <td>Funding Competition #4</td>
                    <td>11:59 pm, October 31</td>
                    <td>November</td>
                </tr>

                <tr>
                    <td>Funding Competition #5</td>
                    <td>11:59 pm, November 30</td>
                    <td>December</td>
                </tr>

                <tr>
                    <td>Funding Competition #6</td>
                    <td>11:59 pm, December 31</td>
                    <td>January</td>
                </tr>

                <tr>
                    <td>Funding Competition #7</td>
                    <td>11:59 pm, January 31</td>
                    <td>February</td>
                </tr>

                <tr>
                    <td>Funding Competition #8</td>
                    <td>11:59 pm, February 28/29</td>
                    <td>March</td>
                </tr>

                <tr>
                    <td>Funding Competition #9</td>
                    <td>11:59 pm, March 31</td>
                    <td>April</td>
                </tr>

                <tr>
                    <td>Funding Competition #10</td>
                    <td>11:59 pm, April 30</td>
                    <td>May</td>
                </tr>
            </tbody>
        </table>
      </div>

      <div>
        <h2>How to Submit Applications</h2>
        <p>Applications can be submitted in the following form: <a href="https://docs.google.com/forms/d/e/1FAIpQLSc9H29hNXB6pBOTDZbsxvJJEoegaFlWbKcm9aQL4xleRtj_4Q/viewform" target="_blank">Fill out the Google Form</a></p>
      </div>

      <div>
        <h2>When will my Application be Reviewed</h2>
        <p>All applications for each Funding Competition will be reviewed by the SELF Committee within a month after the Application Deadline. Applicants are encouraged to submit their applications early for activities within each fiscal year.</p>
      </div>

      <div>
        <h2>Contact Us</h2>
        <p>All inquiries can be emailed to: <a  href="mailto:self@essucalgary.com">self@essucalgary.com</a></p>
      </div>
    </div>
  )
}

export default SELF