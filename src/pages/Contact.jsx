const contactInfo = [
  {
    icon: "📍",
    title: "Campus Address",
    details: [
      "Axis Colleges",
      "Kanpur-Allahabad Highway",
      "Kanpur, Uttar Pradesh 209402",
      "India",
    ],
  },
  {
    icon: "📞",
    title: "Phone Numbers",
    details: [
      "Admissions: +91-XXXXX-XXXXX",
      "General Enquiry: +91-XXXXX-XXXXX",
      "Placement Cell: +91-XXXXX-XXXXX",
    ],
  },
  {
    icon: "✉️",
    title: "Email Addresses",
    details: [
      "admissions@axiscolleges.org",
      "info@axiscolleges.org",
      "placement@axiscolleges.org",
    ],
  },
  {
    icon: "🕐",
    title: "Office Hours",
    details: [
      "Monday - Friday: 9:00 AM - 5:00 PM",
      "Saturday: 9:00 AM - 2:00 PM",
      "Sunday: Closed",
    ],
  },
];

const departments = [
  {
    name: "Admissions Office",
    email: "admissions@axiscolleges.org",
    description: "For course enquiries, application process, and admission-related queries.",
  },
  {
    name: "Academic Office",
    email: "academic@axiscolleges.org",
    description: "For curriculum, examinations, and academic support.",
  },
  {
    name: "Placement Cell",
    email: "placement@axiscolleges.org",
    description: "For campus placements, internships, and career guidance.",
  },
  {
    name: "Student Affairs",
    email: "students@axiscolleges.org",
    description: "For hostel, activities, clubs, and student welfare.",
  },
];

export default function Contact() {
  return (
    <div className="page">
      <div className="page__header">
        <p className="eyebrow">Get in Touch</p>
        <h1>Contact Us</h1>
        <p>
          Have questions about admissions, courses, or campus life? We're here to
          help. Reach out to us through any of the channels below.
        </p>
      </div>

      <section className="section">
        <div className="section__heading">
          <p className="eyebrow">Contact Information</p>
          <h2>How to Reach Us</h2>
        </div>
        <div className="facilities__grid">
          {contactInfo.map((info) => (
            <div key={info.title} className="facility-card">
              <div style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "var(--spacing-sm)" }}>
                {info.icon}
              </div>
              <h3>{info.title}</h3>
              {info.details.map((detail, index) => (
                <p
                  key={index}
                  style={{
                    fontSize: "0.9rem",
                    marginBottom: index < info.details.length - 1 ? "4px" : "0",
                  }}
                >
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="section facilities">
        <div className="section__heading">
          <p className="eyebrow">Departments</p>
          <h2>Direct Contact</h2>
          <p className="section__subtitle">
            Connect directly with specific departments for faster assistance.
          </p>
        </div>
        <div className="schedule-timeline">
          {departments.map((dept) => (
            <div key={dept.name} className="schedule-item">
              <h4>{dept.name}</h4>
              <div className="schedule-speaker">
                <a href={`mailto:${dept.email}`} style={{ color: "var(--primary-blue-light)" }}>
                  {dept.email}
                </a>
              </div>
              <p className="schedule-description">{dept.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__heading">
          <p className="eyebrow">Location</p>
          <h2>Visit Our Campus</h2>
          <p className="section__subtitle">
            Experience our world-class facilities and vibrant campus atmosphere.
            Schedule a campus tour today!
          </p>
        </div>
        <div className="spotlight__card">
          <div className="spotlight__content">
            <h3 style={{ fontSize: "1.5rem", marginBottom: "var(--spacing-sm)" }}>
              Campus Address
            </h3>
            <p>
              <strong>Axis Colleges</strong>
              <br />
              Kanpur-Allahabad Highway
              <br />
              Kanpur, Uttar Pradesh 209402
              <br />
              India
            </p>
            <div style={{ marginTop: "var(--spacing-md)" }}>
              <a
                className="btn btn--primary"
                href="https://www.google.com/maps/place/Axis+Colleges/@26.3448626,80.4505286,17z"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </div>
          </div>
          <div className="spotlight__image">
            <div
              style={{
                width: "100%",
                height: "300px",
                background: "var(--surface)",
                borderRadius: "var(--radius-md)",
                display: "grid",
                placeItems: "center",
                fontSize: "3rem",
              }}
            >
              🗺️
            </div>
          </div>
        </div>
      </section>

      <section className="section events">
        <div className="section__heading">
          <p className="eyebrow">Quick Links</p>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="topics-grid">
          <div className="topic-card">
            <div className="topic-icon">📝</div>
            <h3>Admissions</h3>
            <p>Learn about eligibility, application process, and important dates.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">💰</div>
            <h3>Scholarships</h3>
            <p>Explore merit and need-based financial aid opportunities.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">🏠</div>
            <h3>Hostel Facilities</h3>
            <p>Information about on-campus accommodation and amenities.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">🎓</div>
            <h3>Placements</h3>
            <p>Check placement statistics and recruiting companies.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta__content">
          <h2>Schedule a Campus Visit</h2>
          <p>
            Experience Axis Colleges firsthand. Book a guided campus tour and meet
            with our admissions counselors to discuss your future.
          </p>
          <a className="btn btn--primary" href="mailto:admissions@axiscolleges.org">
            Book a Tour
          </a>
        </div>
      </section>
    </div>
  );
}
