const contactInfo = [
  {
    icon: "🌐",
    title: "Axis Colleges Website",
    details: ["For official conference updates and notices."],
  },
  {
    icon: "📢",
    title: "ICCIST 2026 Updates",
    details: ["Committee, keynote, and registration details will be announced."],
  },
  {
    icon: "📅",
    title: "Conference Dates",
    details: ["4th & 5th April 2026"],
  },
];

export default function Contact() {
  return (
    <div className="page">
      <div className="page__header">
        <p className="eyebrow">Contact Us</p>
        <h1>ICCIST 2026</h1>
        <p>
          For all conference-related updates and announcements, please refer to
          the Axis Colleges website.
        </p>
      </div>

      <section className="section">
        <div className="section__heading">
          <p className="eyebrow">Information</p>
          <h2>Conference Updates</h2>
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

      <section className="section">
        <div className="section__heading">
          <p className="eyebrow">Website</p>
          <h2>Axis Colleges</h2>
          <p className="section__subtitle">
            Visit the Axis Colleges website for official communication and
            downloadable documents.
          </p>
        </div>
        <div className="spotlight__card">
          <div className="spotlight__content">
            <h3 style={{ fontSize: "1.5rem", marginBottom: "var(--spacing-sm)" }}>
              Official Website
            </h3>
            <p>All conference announcements will be published here.</p>
            <div style={{ marginTop: "var(--spacing-md)" }}>
              <a
                className="btn btn--primary"
                href="https://axiscolleges.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Axis Colleges
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
              🌐
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta__content">
          <h2>Stay Updated</h2>
          <p>
            Committee announcements, keynote details, and registration updates
            will be shared through Axis Colleges.
          </p>
          <a
            className="btn btn--primary"
            href="https://axiscolleges.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Axis Colleges
          </a>
        </div>
      </section>
    </div>
  );
}
