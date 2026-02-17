import { Link } from "react-router-dom";

const recognitionLogos = [
  { src: "/assets/recognition/aicte.webp", name: "AICTE" },
  { src: "/assets/recognition/aktu.webp", name: "AKTU" },
  { src: "/assets/recognition/coa.webp", name: "COA" },
  { src: "/assets/recognition/csjmu.webp", name: "CSJMU" },
  { src: "/assets/recognition/cyber.webp", name: "Cyber Security" },
  { src: "/assets/recognition/mhrd.webp", name: "MHRD" },
  { src: "/assets/recognition/pci.webp", name: "PCI" },
];

const milestones = [
  { year: "AICTE", event: "Approved by AICTE New Delhi" },
  { year: "AKTU", event: "Affiliated to AKTU" },
  { year: "BTEUP", event: "Affiliated to BTEUP Lucknow" },
  { year: "AKTU Code", event: "719" },
  { year: "BTEUP Code", event: "3342" },
];

const values = [
  {
    icon: "🧠",
    title: "Learner-Centric",
    description: "A technology-based approach that enhances learning and performance capabilities."
  },
  {
    icon: "⚙️",
    title: "Result-Oriented",
    description: "Focused on measurable outcomes and real-world readiness."
  },
  {
    icon: "🌟",
    title: "Holistic Growth",
    description: "Grooming students to become excellent professionals and good human beings."
  },
  {
    icon: "🤝",
    title: "Nation Building",
    description: "Preparing youth to become torchbearers of their respective domains."
  },
];

export default function About() {
  return (
    <div className="page">
      <div className="page__header">
        <p className="eyebrow">About AITM</p>
        <h1>Axis Institute of Technology and Management</h1>
        <p>
          Approved by AICTE New Delhi, affiliated to AKTU and BTEUP Lucknow.
        </p>
      </div>

      <section className="section">
        <div className="container">
          <div className="spotlight__card spotlight__card--mission">
            <div className="spotlight__content">
              <p className="eyebrow">Our Purpose</p>
              <h2>Technology for Practical Impact</h2>
              <p>
                "Technology means the systematic application of scientific or
                other organized knowledge to practical tasks." This is what we
                seek at Axis Institute of Technology and Management.
              </p>
              <p style={{ marginTop: "var(--spacing-sm)" }}>
                At Axis Colleges, we follow a technology-based, learner-centric,
                and result-oriented approach that enhances students' learning
                and performance capabilities.
              </p>
            </div>
            <div className="spotlight__image">
              <img
                src="/assets/brand/axis-logo.webp"
                alt="Axis Colleges"
                style={{ maxHeight: "280px" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section recognition">
        <div className="section__heading">
          <p className="eyebrow">Accreditation</p>
          <h2>Approved & Recognized By</h2>
          <p className="section__subtitle">
            Our programs are accredited by leading national bodies, ensuring
            quality education that meets global standards.
          </p>
        </div>
        <div className="recognition__logos">
          {recognitionLogos.map((logo) => (
            <div key={logo.name} className="recognition__card">
              <img src={logo.src} alt={logo.name} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__heading">
          <p className="eyebrow">Our Journey</p>
          <h2>Approvals & Affiliations</h2>
        </div>
        <div className="schedule-timeline" style={{ maxWidth: "800px" }}>
          {milestones.map((milestone) => (
            <div key={milestone.year} className="schedule-item">
              <div className="schedule-time">{milestone.year}</div>
              <p className="schedule-description">{milestone.event}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section facilities">
        <div className="section__heading">
          <p className="eyebrow">Our Values</p>
          <h2>What We Stand For</h2>
          <p className="section__subtitle">
            Axis Colleges is passionate about grooming the nation's youth to
            grow into excellent professionals and good human beings.
          </p>
        </div>
        <div className="topics-grid">
          {values.map((value) => (
            <div key={value.title} className="topic-card">
              <div className="topic-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section spotlight">
        <div className="spotlight__card">
          <div className="spotlight__content">
            <p className="eyebrow">About AITM</p>
            <h2>Axis Colleges</h2>
            <p>
              We are committed to a learner-centric, result-oriented environment
              that supports academic excellence, innovation, and real-world
              readiness.
            </p>
          </div>
          <div className="spotlight__image">
            <img src="/assets/people/rajsir.webp" alt="Chairman" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta__content">
          <h2>Learn More About ICCIST 2026</h2>
          <p>
            Stay informed about conference updates, important dates, and
            registration details.
          </p>
          <div style={{ display: "flex", gap: "var(--spacing-sm)", justifyContent: "center", flexWrap: "wrap" }}>
            <Link className="btn btn--primary" to="/conference">
              Visit Conference Page
            </Link>
            <Link className="btn btn--secondary" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
