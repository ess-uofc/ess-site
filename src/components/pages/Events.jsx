import React, { useState } from 'react'
import "./Events.css"


const SIGNUP_LINK = "https://linktr.ee/ess___uofc";

const events = [





  
   {
    month: "OCT",
    day: "15",
    category: "GOVERNANCE",
    title: "Career Fair",
    time: "10:00 am - 5:00 pm",
    location: "ENG Lounge",
    signup: false,

    description:
      `As one of the largest Engineering based career fairs in Western Canada, the ESS event is a popular and and eager way for students to connect with the industry.

        UCalgary Engineering has some of the most entrepreneurial and knowledgeable students and graduates. Our students come from diverse backgrounds and bring different perspectives to each company.

        Thank you to all the sponsor support for this year’s ESS Career Fair!

        Any questions related to pricing and attendance can be directed to corporaterelations@essucalgary.com and sponsorship@essucalgary.com`


  },

  {
    month: "NOV",
    day: "3",
    category: "Professional",
    title: "A Day in the Life: Meet & Network with Transportation Engineers ",
    time: "5:00 pm - 6:30 pm",
    location: "ENG Lounge",
    signup: false,

    description:
      `Join ITE to hear from transportation engineering professionals about their career journeys, day-to-day work, and the projects shaping Calgary and surrounding communities. From redesigning roads and evaluating traffic to planning infrastructure, discover diverse career paths in transportation engineering. Enjoy short presentations, gain industry insights, and network with professionals! Food will be provided!`

  },

    {
    month: "NOV",
    day: "5",
    category: "Professional",
    title: "Study Abroad Info Night",
    time: "4:30 pm - 6:30 pm",
    location: "ENG Lounge",
    signup: "https://docs.google.com/forms/d/e/1FAIpQLSe3wqURfRIqVlWqOzz3Z5ACJ3SL55tTRO6aSo8-8scVrzgzig/viewform?usp=sharing&ouid=110810394704781955027",

    description:
      `Enjoy beverages and food a chance to learn more and ask questions about the study abroad program.`

  },

  {
    month: "NOV",
    day: "6",
    category: "Social",
    title: "Lectures on Tap - Luis Alvarado",
    time: "11:00 am - 1:00 pm",
    location: "ENG Lounge",
    signup: false,

    description:
      `Enjoy beverages and a chance to learn more about your professors interests outside of class time. Chance to socialize and bond with your professors.
Presentation topic: Transdisciplinary engineering-From Discipline to Global Impact `

  },

   {
    month: "NOV",
    day: "10",
    category: "SOCIAL",
    title: "ABB Info Night",
    time: "11:00 am",
    location: "ENG Lounge",
    signup: false,

    description:
      `Come join us at ABB info night in the Engg Lounge. Socialize with people and enjoy free food provided.`


  },

  {
    month: "DATE:",
    day: "TBA",
    category: "SOCIAL",
    title: "Academic Dinner",
    time: "",
    location: "",
    signup: false,
    description:
      "The annual Academic Dinner is an event hosted by the ESS to bring student’s together. We invite 1st, 2nd and 3rd year students, but we welcome anyone that registers. Click the link to register."
  },
  {
    month: "DATE:",
    day: "TBA",
    category: "PROFESSIONAL",
    title: "Annual General Meeting (AGM)",
    time: "",
    location: "",
    signup: false,

    description:
      "The Annual General Meeting is where students come together to review the year, discuss important issues, and vote on motions that shape decisions affecting the entire student body. It’s a space for open discussion, transparency, and making meaningful changes moving forward."
  },
 


   {
    month: "DATE:",
    day: "TBA",
    category: "GOVERNANCE",
    title: "Graduation Banquet",
    time: "",
    location: "",
    signup: false,

    description:
      `The annual Graduation Banquet is an event hosted by the ESS to bring the graduating year’s student’s together.`
  },

     {
    month: "DATE:",
    day: "TBA",
    category: "GOVERNANCE",
    title: "High School Engineering Competition (HSEC)",
    time: "",
    location: "",
    signup: false,

    description:
      `The High Schoool Engineering Competition (HSEC) is an annual competition in which high school students work in teams to complete an engineering challenge.`
  },


]

function EventCard({ event }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className={`event-card ${expanded ? "expanded" : ""}`}>

      <div className="event-dates">
        <span>{event.month}</span>
        <strong>{event.day}</strong>
      </div>

      <div className="event-content">

        <span className="event-category">
          {event.category}
        </span>

        <h2>{event.title}</h2>

        <div className="event-info">
          <span>{event.time}</span>
          <span>{event.location}</span>
        </div>

        {expanded && (
          <p className="event-description">
            {event.description}
          </p>
        )}

      {event.signup && (
        <a
          className="event-signup"
          href={SIGNUP_LINK}
          target="_blank"
          rel="noreferrer"
      >
          Linktree Sign Up 
      </a>
      )}

      </div>

      <button
        className="event-toggle"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Show More"}
      </button>

    </article>
  )
}

function Events() {
  return (
    <section className="events-page">

      <section className="events-header">
        <div className="events-header-content">

          <div className="events-header-text">
            <h1>Events Calendar</h1>
            <p>
              Events hosted by the ESS, discipline clubs and the faculty —
              all in one place.
            </p>
          </div>

   <div className="calendar-container">
  <iframe
    src="https://calendar.google.com/calendar/embed?src=00093278d655d44a275fbe47a4c03440b307d382675d3a07345d0ab6168e7%40group.calendar.google.com&ctz=America%2FEdmonton"
    title="ESS Events Calendar"
    frameBorder="0"
    scrolling="no"
  ></iframe>
</div>
        </div>
      </section>

      <section className="events-list">
        <h1>Upcoming News & Events</h1>
        {events.map((event, index) => (
          <EventCard
            key={index}
            event={event}
          />
        ))}
      </section>

    </section>
  )
}

export default Events