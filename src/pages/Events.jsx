import { useMemo } from "react";

const events = [
  {
    title: "Film Making Workshop",
    image: "/assets/events/firststride.jpg",
    date: "March 2024",
    description: "Students explore cinematic techniques in hands-on filmmaking sessions.",
  },
  {
    title: "Smart India Hackathon",
    image: "/assets/events/hackathon.jpg",
    date: "February 2024",
    description: "National-level hackathon solving real-world problems with innovative solutions.",
  },
  {
    title: "FirstStride Career Fair",
    image: "/assets/events/firststride.jpg",
    date: "January 2024",
    description: "Connect with top recruiters and explore career opportunities.",
  },
  {
    title: "Tech Innovation Hackathon",
    image: "/assets/events/hackathon.jpg",
    date: "December 2023",
    description: "48-hour coding marathon with prizes worth ₹5 lakhs.",
  },
  {
    title: "Health & Wellness Camp",
    image: "/assets/events/health-camp.jpg",
    date: "November 2023",
    description: "Free health checkups and awareness programs for students and community.",
  },
  {
    title: "Freshers Welcome 2023",
    image: "/assets/events/freshers.jpg",
    date: "October 2023",
    description: "Grand celebration welcoming new students to the Axis family.",
  },
  {
    title: "Gandhigiri 2022",
    image: "/assets/events/gandhigiri.jpg",
    date: "October 2022",
    description: "Celebrating Gandhian values through cultural performances and discussions.",
  },
  {
    title: "Guru Randhawa Live Concert",
    image: "/assets/events/guru-randhawa.webp",
    date: "September 2022",
    description: "Electrifying live performance by renowned Bollywood artist.",
  },
  {
    title: "Blood Donation Camp 2023",
    image: "/assets/events/blood-donation.jpg",
    date: "August 2023",
    description: "Students contribute to society through voluntary blood donation drive.",
  },
];

const upcomingEvents = [
  {
    title: "Annual Tech Fest 2024",
    date: "April 15-17, 2024",
    description: "Three days of technical competitions, workshops, and guest lectures from industry leaders.",
  },
  {
    title: "International Conference",
    date: "May 10-12, 2024",
    description: "Academic conference on emerging technologies and sustainable development.",
  },
  {
    title: "Cultural Festival",
    date: "March 25-26, 2024",
    description: "Showcase of diverse cultural performances, art exhibitions, and food stalls.",
  },
];

export default function Events() {
  const eventRows = useMemo(() => {
    const chunkSize = 3;
    const rows = [];
    for (let index = 0; index < events.length; index += chunkSize) {
      rows.push(events.slice(index, index + chunkSize));
    }
    return rows;
  }, []);

  return (
    <div className="page">
      <div className="page__header">
        <p className="eyebrow">Campus Life</p>
        <h1>Events & Activities</h1>
        <p>
          From technical workshops to cultural celebrations, Axis Colleges
          offers a vibrant campus life with events throughout the year.
        </p>
      </div>

      <section className="section">
        <div className="section__heading">
          <p className="eyebrow">Coming Soon</p>
          <h2>Upcoming Events</h2>
        </div>
        <div className="schedule-timeline">
          {upcomingEvents.map((event) => (
            <div key={event.title} className="schedule-item">
              <div className="schedule-time">{event.date}</div>
              <h4>{event.title}</h4>
              <p className="schedule-description">{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section events">
        <div className="section__heading">
          <p className="eyebrow">Gallery</p>
          <h2>Past Events</h2>
          <p className="section__subtitle">
            Take a look at some memorable moments from our recent campus events
            and celebrations.
          </p>
        </div>
        <div className="events__stack">
          {eventRows.map((row, index) => (
            <div key={`row-${index}`} className="events__row">
              {row.map((event) => (
                <article key={event.title} className="event-card">
                  <img src={event.image} alt={event.title} loading="lazy" />
                  <div className="event-card__overlay">
                    <div>
                      <h3>{event.title}</h3>
                      <p style={{ fontSize: "0.85rem", marginTop: "var(--spacing-xs)" }}>
                        {event.date}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="section facilities">
        <div className="section__heading">
          <p className="eyebrow">Get Involved</p>
          <h2>Student Clubs & Activities</h2>
          <p className="section__subtitle">
            Join various clubs and organizations to pursue your interests and
            develop new skills.
          </p>
        </div>
        <div className="topics-grid">
          <div className="topic-card">
            <div className="topic-icon">💻</div>
            <h3>Tech Club</h3>
            <p>Coding competitions, hackathons, and tech workshops for programming enthusiasts.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">🎭</div>
            <h3>Drama Society</h3>
            <p>Theater performances, street plays, and acting workshops throughout the year.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">🎨</div>
            <h3>Art & Design Club</h3>
            <p>Exhibitions, workshops, and creative projects for aspiring artists and designers.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">🎵</div>
            <h3>Music Club</h3>
            <p>Live performances, jam sessions, and music production workshops for musicians.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">⚽</div>
            <h3>Sports Committee</h3>
            <p>Inter-college tournaments, fitness programs, and sports facilities access.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">🤝</div>
            <h3>Social Service</h3>
            <p>Community outreach programs, blood donation drives, and volunteer activities.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta__content">
          <h2>Want to Organize an Event?</h2>
          <p>
            Students are encouraged to propose and organize events. Contact the
            student activities office to learn more.
          </p>
          <a className="btn btn--primary" href="mailto:events@axiscolleges.org">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
