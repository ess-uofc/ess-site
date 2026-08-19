import React, { useState } from 'react'
import "./Events.css"

const events = [
  {
    month: "DATE:",
    day: "TBA",
    category: "SOCIAL",
    title: "Academic Dinner",
    time: "",
    location: "",
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
    description:
      "The Annual General Meeting is where students come together to review the year, discuss important issues, and vote on motions that shape decisions affecting the entire student body. It’s a space for open discussion, transparency, and making meaningful changes moving forward."
  },
 
  {
    month: "OCT",
    day: "15",
    category: "GOVERNANCE",
    title: "Career Fair",
    time: "10:00 am – 5:00 pm",
    location: "ENG Lounge",
    description:
      `As one of the largest Engineering based career fairs in Western Canada, the ESS event is a popular and and eager way for students to connect with the industry.

        UCalgary Engineering has some of the most entrepreneurial and knowledgeable students and graduates. Our students come from diverse backgrounds and bring different perspectives to each company.

        Thank you to all the sponsor support for this year’s ESS Career Fair!

        Any questions related to pricing and attendance can be directed to corporaterelations@essucalgary.com and sponsorship@essucalgary.com`


  },

   {
    month: "DATE:",
    day: "TBA",
    category: "GOVERNANCE",
    title: "Graduation Banquet",
    time: "",
    location: "",
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
              src="https://calendar.google.com/calendar/u/0/embed?src=c_eb8022439936ef5ad9e25a6fbbd0a1f74ff9596d07f73a71018837d742f5fee3%40group.calendar.google.com&ctz=America%2FEdmonton"
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