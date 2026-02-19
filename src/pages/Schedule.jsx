import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Seo from "../components/Seo";
import "./Schedule.css";

const importantDates = [
  { date: "25-February-2026", label: "Paper submissions open" },
  { date: "25-March-2026", label: "Last date for submission" },
  { date: "As per submission", label: "Notification of acceptance" },
  { date: "01-April-2026", label: "Registration deadline" },
  { date: "02-April-2026", label: "Final camera-ready submission" },
  { date: "04-05 April-2026", label: "Conference dates" },
];

export default function Schedule() {
  return (
    <div className="schedule-page">
      <Seo
        title="Conference Schedule"
        description="View ICCIST 2026 day-wise schedule including technical sessions, keynotes, workshops, presentations, and networking events."
        path="/schedule"
        type="event"
        keywords={[
          "ICCIST schedule",
          "conference agenda",
          "keynote and workshop timings",
          "technical session timetable",
          "conference program"
        ]}
      />
      {/* Hero Section */}
      <section className="schedule-hero">
        <div className="schedule-hero__pattern"></div>
        <div className="schedule-hero__content">
          <span className="schedule-hero__eyebrow">Conference Program</span>
          <h1 className="schedule-hero__title">
            ICCIST 2026 Schedule
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

      {/* Important Dates Section */}
      <section className="section schedule-section">
        <div className="container">
          <div className="schedule-timeline">
            {importantDates.map((item, index) => (
              <div key={index} className="schedule-item">
                <div className="schedule-time">{item.date}</div>
                <p className="schedule-description">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Note Section */}
          <div className="schedule-note">
            <p>
              <span className="note-icon">📌</span>
              All deadlines are at 23:59 IST. Authors are requested to submit 
              their papers well before the deadline to avoid any technical issues.
            </p>
          </div>

          {/* Back Button */}
          <div className="schedule-back">
            <Link to="/" className="btn btn--secondary">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}