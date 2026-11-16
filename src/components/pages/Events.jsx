import React, { useState } from 'react'
import "./Events.css"


const SIGNUP_LINK = "https://linktr.ee/ess___uofc";

const events = [


   {
    month: "N/A",
    day: "",
    category: "PROFESSIONAL",
    title: "Mental Health and Wellness Survey",
    time: "",
    location: "",
    signup: "https://docs.google.com/forms/d/e/1FAIpQLScmnApLF6h0lz1rh0nzSFGT6UbPrazF97xbrjnbO4g2XZj40w/viewform",

    description:
      `Help improve the Mental Health and Wellness supports for engineering students! Fill out this 5-minute survey to help support our recommendations for better and more active supports for students. Chance to win bake chef gift cards if you fill it out!`
  },


   {
    month: "NOV",
    day: "20",
    category: "SOCIAL",
    title: "I scream for ice cream",
    time: "11:00 am - end of supply",
    location: "ESS office",
    signup: false,

    description:
      `Failed a midterm? It's ok we all have, that's why we want to give you a consolation prize in the form of free ice cream. Show your failed midterm grade to the person working in the ESS office, grab your favourite flavour and pose for a picture! `
  },
 
     {
    month: "NOV",
    day: "27",
    category: "SOCIAL",
    title: " ABB Info Night",
    time: "11:00 am start",
    location: "ENG Lounge",
    signup: false,

    description:
      `Come learn about global leader in electrification and automation and connect with industry professionals. **Food will be provided.`
  },
    {
    month: "NOV",
    day: "27",
    category: "SOCIAL",
    title: "Lectures on Tap - Omar Boursalie",
    time: "11:00 am - 1:00 pm",
    location: "ENG Lounge",
    signup: false,

    description:
      `Enjoy beverages and a chance to learn more about your professors interests outside of class time. Chance to socialize and bond with your professors.
Presentation topic: Designing Machine Learning Models for the Complex World of Healthcare. **Drinks will be non-alcohlic`


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