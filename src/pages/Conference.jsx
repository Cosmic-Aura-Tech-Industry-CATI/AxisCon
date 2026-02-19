

const importantDates = [
  { date: "25-February-2026", label: "Paper submissions open" },
  { date: "25-March-2026", label: "Last date for submission" },
  { date: "As per submission", label: "Notification of acceptance" },
  { date: "01-April-2026", label: "Registration deadline" },
  { date: "02-April-2026", label: "Final camera-ready submission" },
  { date: "04-05 April-2026", label: "Conference dates" },
];



const downloads = [
  { title: "ICCIST 2026 Brochure", href: "#" },
  { title: "ICCIST 2026 Paper Format", href: "#" },
];

import { useEffect } from "react";
import Seo from "../components/Seo";

export default function Conference() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <Seo
        title="Conference Details"
        description="Explore ICCIST 2026 conference themes, key dates, downloads, and participation opportunities in AI, ML, data science, and IT."
        path="/conference"
        type="event"
        keywords={[
          "ICCIST 2026 conference details",
          "AI ML conference schedule",
          "international conference India 2026",
          "computer science paper presentation",
          "conference important dates"
        ]}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Event",
            name: "ICCIST 2026",
            eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
            eventStatus: "https://schema.org/EventScheduled",
            startDate: "2026-04-04",
            endDate: "2026-04-05",
            description: "International Conference on Computational Intelligence and Smart Technologies hosted by Axis Colleges.",
            organizer: {
              "@type": "Organization",
              name: "Axis Colleges",
              url: "https://axiscolleges.org"
            },
            location: {
              "@type": "Place",
              name: "Axis Colleges",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kanpur",
                addressRegion: "Uttar Pradesh",
                addressCountry: "IN"
              }
            },
            url: "https://axiscolleges.org/conference"
          }
        ]}
        faqs={[
          {
            question: "What is ICCIST 2026 focused on?",
            answer: "ICCIST 2026 focuses on computational intelligence, smart technologies, AI, machine learning, data science, and information technology."
          },
          {
            question: "Can students submit papers to ICCIST 2026?",
            answer: "Yes, students and researchers can submit papers through the submit paper section before the deadline."
          }
        ]}
      />
      <div className="conference-hero">
        <div className="conference-info">
          <p className="eyebrow">ICCIST 2026</p>
          <h1>Welcome to ICCIST 2026</h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-muted)",
              marginBottom: "var(--spacing-md)",
            }}
          >
            The International Conference on Computer Science, Information
            Technology, and Intelligent Systems brings together researchers,
            faculty, industry experts, and students to exchange knowledge,
            present research findings, and discuss future challenges and
            opportunities in AI, ML, Data Science, and IT.
          </p>
          <div className="conference-date">
            <span>📅</span>
            <span>4th & 5th April 2026</span>
          </div>
          <div
            style={{
              marginTop: "var(--spacing-lg)",
              display: "flex",
              gap: "var(--spacing-sm)",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a className="btn btn--primary" href="#registration">
              Registration Details
            </a>
            <a className="btn btn--ghost" href="#dates">
              Important Dates
            </a>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="section__heading">
          <p className="eyebrow">Scope of the Conference</p>
          <h2>International Conference on Computational Intelligence and Smart Technologies</h2>
          <p className="section__subtitle">
            ICCIST 2026 provides an international platform for researchers,
            academicians, industry professionals, and students to present and
            discuss recent advancements, innovations, and research challenges in
            computational intelligence and smart technologies.
          </p>
        </div>
        <div className="spotlight__card">
          <div className="spotlight__content">
            <h3>Interdisciplinary Focus</h3>
            <p>
              The conference focuses on intelligent computing techniques, smart
              systems, and emerging technologies that contribute to automation,
              digital transformation, and sustainable technological development.
            </p>
            <p style={{ marginTop: "var(--spacing-sm)" }}>
              It encourages collaboration between academia and industry to
              address real-world problems using intelligent and data-driven
              approaches.
            </p>
          </div>
          <div className="spotlight__image">
            <img src="/assets/events/event-1.jpg" alt="Conference scope" loading="lazy" />
          </div>
        </div>
      </section>

      

      <section className="section">
        <div className="section__heading">
          <p className="eyebrow">About AITM</p>
          <h2>Axis Institute of Technology and Management</h2>
          <p className="section__subtitle">
            Approved by AICTE New Delhi, affiliated to AKTU and BTEUP Lucknow.
          </p>
        </div>
        <div className="spotlight__card">
          <div className="spotlight__content">
            <p>
              "Technology means the systematic application of scientific or
              other organized knowledge to practical tasks." This is what we
              seek at Axis Institute of Technology and Management. At Axis
              Colleges, we follow a technology-based, learner-centric, and
              result-oriented approach which enhances students' learning and
              performance capabilities.
            </p>
            <p style={{ marginTop: "var(--spacing-sm)" }}>
              We are passionate about grooming the nation's youth to grow into
              excellent professionals and good human beings destined to become
              torchbearers of their respective domains.
            </p>
          </div>
          <div className="spotlight__image">
            <img src="/assets/brand/axis-logo.webp" alt="Axis Colleges" loading="lazy" />
          </div>
        </div>
      </section>

      

      <section className="section" id="dates">
        <div className="section__heading">
          <p className="eyebrow">Program Schedule</p>
          <h2>Important Dates</h2>
          <p className="section__subtitle">
            Please note and plan for submissions and participation.
          </p>
        </div>
        <div className="schedule-timeline">
          {importantDates.map((item) => (
            <div key={item.label} className="schedule-item">
              <div className="schedule-time">{item.date}</div>
              <p className="schedule-description">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section facilities" id="registration">
        <div className="section__heading">
          <p className="eyebrow">Registration</p>
          <h2>ICCIST 2026 Registration</h2>
          <p className="section__subtitle">
            Conference registration payment can be done through online gateway,
            NEFT, net banking, or bank deposit as per the official details.
          </p>
        </div>
        <div className="spotlight__card">
          <div className="spotlight__content">
            <h3>Payment Options</h3>
            <p>Online Gateway, NEFT, Net Banking, or Bank Deposit.</p>
            <p style={{ marginTop: "var(--spacing-sm)" }}>
              The payment instructions and fee structure will be shared with the
              official registration notice.
            </p>
          </div>
          <div className="spotlight__image">
            <img src="/assets/cta/cta-1.jpg" alt="Registration" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__heading">
          <p className="eyebrow">Downloads</p>
          <h2>Conference Documents</h2>
          <p className="section__subtitle">
            Access the brochure and paper format for ICCIST 2026.
          </p>
        </div>
        <div className="schedule-timeline" style={{ maxWidth: "640px" }}>
          {downloads.map((item) => (
            <div key={item.title} className="schedule-item">
              <h4>{item.title}</h4>
              <div className="schedule-speaker">
                <a href={item.href} className="btn btn--ghost">
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section events">
        <div className="section__heading">
          <p className="eyebrow">Keynote</p>
          <h2>Keynote Speaker</h2>
          <p className="section__subtitle">Yet to announce.</p>
        </div>
        <div className="topics-grid">
          <div className="topic-card">
            <div className="topic-icon">🎤</div>
            <h3>Keynote</h3>
            <p>Speaker details will be updated soon.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta__content">
          <h2>Contact Us</h2>
          <p>For updates, please visit the Axis Colleges website.</p>
          <a className="btn btn--primary" href="https://axiscolleges.org" target="_blank" rel="noopener noreferrer">
            Axis Colleges Website
          </a>
        </div>
      </section>
    </div>
  );
}
