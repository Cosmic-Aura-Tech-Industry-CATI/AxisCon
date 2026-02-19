import { Link } from "react-router-dom";

const recognitionLogos = [
  "/assets/recognition/aicte.webp",
  "/assets/recognition/aktu.webp",
  "/assets/recognition/coa.webp",
  "/assets/recognition/csjmu.webp",
  "/assets/recognition/cyber.webp",
  "/assets/recognition/mhrd.webp",
  "/assets/recognition/pci.webp",
];

const focusAreas = [
  {
    title: "Artificial Intelligence",
    subtitle: "Intelligent systems and real-world applications",
    image: "/assets/courses/btech.jpg",
  },
  {
    title: "Machine Learning",
    subtitle: "Data-driven models and predictive insights",
    image: "/assets/courses/mca.webp",
  },
  {
    title: "Data Science",
    subtitle: "Analytics, visualization, and decision support",
    image: "/assets/courses/mba.jpg",
  },
  {
    title: "Information Technology",
    subtitle: "Systems, security, and digital transformation",
    image: "/assets/courses/bpharma.jpg",
  },
];

const importantDates = [
  { date: "25-February-2026", label: "Paper submissions open" },
  { date: "25-March-2026", label: "Last date for submission" },
  { date: "As per submission", label: "Notification of acceptance" },
  { date: "01-April-2026", label: "Registration deadline" },
  { date: "02-April-2026", label: "Final camera-ready submission" },
  { date: "04-05 April-2026", label: "Conference dates" },
];

const committee = [
  {
    title: "Organizing Committee",
    description: "Yet to announce",
  },
  {
    title: "National Advisory Committee",
    description: "Yet to announce",
  },
  {
    title: "International Advisory Committee",
    description: "Yet to announce",
  },
];

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="hero__content">
          <div className="hero__text">
            <p className="hero__tag">ICCIST 2026</p>
            <h1>
              International Conference on Computational Intelligence
              <span> and Smart Technologies</span>
            </h1>
            <p className="hero__lead">
              It is our great pleasure to welcome researchers, faculty members,
              industry experts, and students to exchange knowledge, present
              research findings, and discuss future challenges in AI, ML, Data
              Science, and Information Technology.
            </p>
            <div className="hero__actions">
              <Link className="btn btn--primary" to="/conference">
                View Conference
              </Link>
              <Link className="btn btn--secondary" to="/conference">
                Important Dates
              </Link>
            </div>
          </div>
          <div className="hero__panel">
            <div className="hero__stat">
              <p className="hero__stat-value">AI</p>
              <p className="hero__stat-label">Intelligent Systems</p>
            </div>
            <div className="hero__stat">
              <p className="hero__stat-value">ML</p>
              <p className="hero__stat-label">Data-Driven Innovation</p>
            </div>
            <div className="hero__stat">
              <p className="hero__stat-value">IT</p>
              <p className="hero__stat-label">Digital Transformation</p>
            </div>
          </div>
        </div>
      </header>

      

      <section className="section">
        <div className="section__heading">
          <p className="eyebrow">Conference Focus</p>
          <h2>Key Research Areas</h2>
          <p className="section__subtitle">
            The conference emphasizes intelligent computing techniques, smart
            systems, and emerging technologies that drive automation and
            sustainable development.
          </p>
        </div>
        <div className="courses__grid">
          {focusAreas.map((area) => (
            <article key={area.title} className="course-card">
              <div className="course-card__image">
                <img src={area.image} alt={area.title} loading="lazy" />
              </div>
              <div className="course-card__body">
                <h3>{area.title}</h3>
                <p>{area.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      

      <section className="section">
        <div className="section__heading">
          <p className="eyebrow">Program Schedule</p>
          <h2>Important Dates</h2>
          <p className="section__subtitle">
            Plan your submissions and participation for ICCIST 2026.
          </p>
        </div>
        <div className="schedule-timeline" style={{ maxWidth: "860px" }}>
          {importantDates.map((item) => (
            <div key={item.label} className="schedule-item">
              <div className="schedule-time">{item.date}</div>
              <p className="schedule-description">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section events">
        <div className="section__heading">
          <p className="eyebrow">Committee</p>
          <h2>Conference Committees</h2>
          <p className="section__subtitle">
            Committee details will be announced soon.
          </p>
        </div>
        <div className="topics-grid">
          {committee.map((item) => (
            <div key={item.title} className="topic-card">
              <div className="topic-icon">📌</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="cta__content">
          <h2>Registration - ICCIST 2026</h2>
          <p>
            Conference registration payment can be done through online gateway,
            NEFT, net banking, or bank deposit.
          </p>
          <Link className="btn btn--primary" to="/conference">
            See Registration Details
          </Link>
        </div>
      </section>
    </>
  );
}
