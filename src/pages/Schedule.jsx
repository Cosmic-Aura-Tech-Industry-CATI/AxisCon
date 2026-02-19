import { Link } from "react-router-dom";
import { useState } from "react";
import "./Schedule.css";

const conferenceDays = [
  {
    day: "Day 1",
    date: "April 4, 2026",
    tracks: [
      {
        time: "09:00 - 10:00",
        sessions: [
          { title: "Registration & Breakfast", type: "networking", location: "Main Lobby" }
        ]
      },
      {
        time: "10:00 - 11:30",
        sessions: [
          { title: "Inaugural Ceremony", type: "plenary", location: "Auditorium A" },
          { title: "Welcome Address by Director", type: "plenary", location: "Auditorium A" },
          { title: "Keynote: Future of AI", type: "keynote", location: "Auditorium A" }
        ]
      },
      {
        time: "11:30 - 13:00",
        sessions: [
          { title: "Machine Learning Algorithms", type: "technical", location: "Room 101", track: "Track A" },
          { title: "Neural Networks", type: "technical", location: "Room 102", track: "Track B" },
          { title: "Data Mining Techniques", type: "technical", location: "Room 103", track: "Track C" }
        ]
      },
      {
        time: "13:00 - 14:00",
        sessions: [
          { title: "Lunch Break", type: "break", location: "Dining Hall" }
        ]
      },
      {
        time: "14:00 - 15:30",
        sessions: [
          { title: "Paper Presentations Session 1", type: "presentation", location: "Room 101", track: "Track A" },
          { title: "Paper Presentations Session 2", type: "presentation", location: "Room 102", track: "Track B" },
          { title: "Workshop: Deep Learning", type: "workshop", location: "Lab 201", track: "Workshop" }
        ]
      },
      {
        time: "15:30 - 16:00",
        sessions: [
          { title: "Tea Break & Networking", type: "break", location: "Lounge" }
        ]
      },
      {
        time: "16:00 - 17:30",
        sessions: [
          { title: "Panel Discussion: AI Ethics", type: "panel", location: "Auditorium A" },
          { title: "Poster Session", type: "poster", location: "Exhibition Hall" }
        ]
      }
    ]
  },
  {
    day: "Day 2",
    date: "April 5, 2026",
    tracks: [
      {
        time: "09:00 - 10:30",
        sessions: [
          { title: "Keynote: Smart Technologies", type: "keynote", location: "Auditorium A" },
          { title: "Industry Talk: AI in Healthcare", type: "industry", location: "Auditorium A" }
        ]
      },
      {
        time: "10:30 - 11:00",
        sessions: [
          { title: "Morning Break", type: "break", location: "Lounge" }
        ]
      },
      {
        time: "11:00 - 12:30",
        sessions: [
          { title: "Paper Presentations Session 3", type: "presentation", location: "Room 101", track: "Track A" },
          { title: "Paper Presentations Session 4", type: "presentation", location: "Room 102", track: "Track B" },
          { title: "Workshop: IoT Applications", type: "workshop", location: "Lab 202", track: "Workshop" }
        ]
      },
      {
        time: "12:30 - 13:30",
        sessions: [
          { title: "Lunch Break", type: "break", location: "Dining Hall" }
        ]
      },
      {
        time: "13:30 - 15:00",
        sessions: [
          { title: "Technical Sessions", type: "technical", location: "Multiple Venues" },
          { title: "Research Collaboration Meet", type: "networking", location: "Conference Room" }
        ]
      },
      {
        time: "15:00 - 15:30",
        sessions: [
          { title: "Tea Break", type: "break", location: "Lounge" }
        ]
      },
      {
        time: "15:30 - 17:00",
        sessions: [
          { title: "Valedictory Ceremony", type: "plenary", location: "Auditorium A" },
          { title: "Award Distribution", type: "plenary", location: "Auditorium A" },
          { title: "Vote of Thanks", type: "plenary", location: "Auditorium A" }
        ]
      }
    ]
  }
];

const sessionTypes = [
  { type: "keynote", label: "Keynote Session", color: "#e53935" },
  { type: "plenary", label: "Plenary Session", color: "#3f4f9d" },
  { type: "technical", label: "Technical Session", color: "#ffc107" },
  { type: "workshop", label: "Workshop", color: "#4caf50" },
  { type: "presentation", label: "Paper Presentation", color: "#9c27b0" },
  { type: "panel", label: "Panel Discussion", color: "#ff9800" },
  { type: "break", label: "Break", color: "#607d8b" },
  { type: "networking", label: "Networking", color: "#00bcd4" },
  { type: "industry", label: "Industry Talk", color: "#8bc34a" },
  { type: "poster", label: "Poster Session", color: "#e91e63" }
];

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(0);
  const [filterType, setFilterType] = useState("all");

  const filteredSessions = conferenceDays[activeDay].tracks
    .map(track => ({
      ...track,
      sessions: track.sessions.filter(session => 
        filterType === "all" || session.type === filterType
      )
    }))
    .filter(track => track.sessions.length > 0);

  return (
    <div className="schedule-page">
      {/* Hero Section */}
      <section className="schedule-hero">
        <div className="schedule-hero__pattern"></div>
        <div className="schedule-hero__content">
          <span className="schedule-hero__eyebrow">Conference Program</span>
          <h1 className="schedule-hero__title">
            ICCIST 2026 <span>Schedule</span>
          </h1>
          <p className="schedule-hero__description">
            Join us for two days of insightful presentations, engaging workshops, 
            and networking opportunities with leading experts in computational intelligence.
          </p>
          <div className="schedule-hero__stats">
            <div className="schedule-hero__stat">
              <span className="stat-value">2</span>
              <span className="stat-label">Days</span>
            </div>
            <div className="schedule-hero__stat">
              <span className="stat-value">40+</span>
              <span className="stat-label">Sessions</span>
            </div>
            <div className="schedule-hero__stat">
              <span className="stat-value">30+</span>
              <span className="stat-label">Speakers</span>
            </div>
            <div className="schedule-hero__stat">
              <span className="stat-value">3</span>
              <span className="stat-label">Tracks</span>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Controls */}
      <section className="schedule-controls">
        <div className="container">
          <div className="schedule-tabs">
            {conferenceDays.map((day, index) => (
              <button
                key={index}
                className={`schedule-tab ${activeDay === index ? 'active' : ''}`}
                onClick={() => setActiveDay(index)}
              >
                <span className="schedule-tab__day">{day.day}</span>
                <span className="schedule-tab__date">{day.date}</span>
              </button>
            ))}
          </div>

          <div className="schedule-filters">
            <button
              className={`schedule-filter-btn ${filterType === 'all' ? 'active' : ''}`}
              onClick={() => setFilterType('all')}
            >
              All Sessions
            </button>
            {sessionTypes.map(type => (
              <button
                key={type.type}
                className={`schedule-filter-btn ${filterType === type.type ? 'active' : ''}`}
                onClick={() => setFilterType(type.type)}
                style={{ '--filter-color': type.color }}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Timeline */}
      <section className="schedule-timeline-section">
        <div className="container">
          <div className="schedule-legend">
            <h3>Session Types</h3>
            <div className="schedule-legend__items">
              {sessionTypes.map(type => (
                <div key={type.type} className="schedule-legend__item">
                  <span className="legend-dot" style={{ backgroundColor: type.color }}></span>
                  <span className="legend-label">{type.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="schedule-day-info">
            <h2>{conferenceDays[activeDay].day} - {conferenceDays[activeDay].date}</h2>
          </div>

          <div className="schedule-timeline">
            {filteredSessions.map((track, trackIndex) => (
              <div key={trackIndex} className="schedule-track">
                <div className="schedule-time">{track.time}</div>
                <div className="schedule-sessions">
                  {track.sessions.map((session, sessionIndex) => (
                    <div
                      key={sessionIndex}
                      className={`schedule-session schedule-session--${session.type}`}
                      style={{ '--session-color': sessionTypes.find(t => t.type === session.type)?.color }}
                    >
                      <div className="schedule-session__header">
                        <span className="schedule-session__type-badge">
                          {session.type.charAt(0).toUpperCase() + session.type.slice(1)}
                        </span>
                        {session.track && (
                          <span className="schedule-session__track">{session.track}</span>
                        )}
                      </div>
                      <h3 className="schedule-session__title">{session.title}</h3>
                      <div className="schedule-session__meta">
                        <span className="schedule-session__location">
                          <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" strokeWidth="2"/>
                            <circle cx="12" cy="9" r="2.5" strokeWidth="2"/>
                          </svg>
                          {session.location}
                        </span>
                        {session.track && (
                          <span className="schedule-session__track-mobile">
                            Track: {session.track}
                          </span>
                        )}
                      </div>
                      <button className="schedule-session__expand">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {filteredSessions.length === 0 && (
            <div className="schedule-empty">
              <div className="schedule-empty__icon">🔍</div>
              <h3>No sessions found</h3>
              <p>Try adjusting your filters to see more sessions</p>
              <button className="btn btn--primary" onClick={() => setFilterType('all')}>
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Download Section */}
      <section className="schedule-download">
        <div className="container">
          <div className="schedule-download__card">
            <div className="schedule-download__content">
              <h2>Download Resources</h2>
              <p>Access the complete conference schedule and paper submission template to get started with your research.</p>
              <div className="schedule-download__actions">
                <a 
                  href="/Sample_IEEE_Conference_Paper_Format.pdf" 
                  download="Sample_IEEE_Conference_Paper_Format.pdf"
                  className="btn btn--primary"
                >
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Sample Paper Template
                </a>
                <a 
                  href="#" 
                  className="btn btn--secondary"
                  title="Schedule PDF will be available soon"
                >
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Download Schedule
                </a>
              </div>
            </div>
            <div className="schedule-download__image">
              <img src="/assets/cta/cta-banner.webp" alt="Schedule preview" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="schedule-cta">
        <div className="container">
          <div className="schedule-cta__content">
            <h2>Ready to Join ICCIST 2026?</h2>
            <p>Register now to secure your spot at this premier conference.</p>
            <div className="schedule-cta__actions">
              <Link to="/conference" className="btn btn--primary">Register Now</Link>
              <Link to="/contact" className="btn btn--secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}