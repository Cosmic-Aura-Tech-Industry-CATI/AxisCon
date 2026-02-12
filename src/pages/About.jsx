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
  { year: "2013", event: "Axis Colleges established with first campus" },
  { year: "2015", event: "Introduced Engineering & Pharmacy programs" },
  { year: "2018", event: "Expanded to 3 campuses with 5,000+ students" },
  { year: "2020", event: "Launched online learning platform during pandemic" },
  { year: "2022", event: "Achieved 85% placement rate with top companies" },
  { year: "2024", event: "12,000+ students across 20+ programs" },
];

const values = [
  {
    icon: "🎯",
    title: "Excellence",
    description: "Committed to delivering world-class education and maintaining the highest academic standards."
  },
  {
    icon: "🤝",
    title: "Integrity",
    description: "Building a culture of trust, transparency, and ethical practices in all our endeavors."
  },
  {
    icon: "💡",
    title: "Innovation",
    description: "Encouraging creative thinking and cutting-edge research to solve real-world problems."
  },
  {
    icon: "🌍",
    title: "Community",
    description: "Fostering a diverse, inclusive environment where everyone can thrive and contribute."
  },
];

export default function About() {
  return (
    <div className="page">
      <div className="page__header">
        <p className="eyebrow">About Us</p>
        <h1>Building Tomorrow's Leaders</h1>
        <p>
          Axis Colleges is a premier educational institution dedicated to
          providing quality education across engineering, medical, and
          professional disciplines since 2013.
        </p>
      </div>

      <section className="section">
        <div className="container">
          <div className="spotlight__card">
            <div className="spotlight__content">
              <p className="eyebrow">Our Mission</p>
              <h2>Empowering Minds, Shaping Futures</h2>
              <p>
                At Axis Colleges, we strive to create an ecosystem where
                academic excellence meets practical innovation. Our mission is
                to nurture young minds, equip them with cutting-edge skills,
                and prepare them to become leaders in their chosen fields.
              </p>
              <p style={{ marginTop: "var(--spacing-sm)" }}>
                We believe in holistic development that goes beyond textbooks -
                fostering critical thinking, ethical values, and a spirit of
                entrepreneurship in every student who walks through our doors.
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
          <h2>Milestones & Achievements</h2>
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
            Our core values guide everything we do, from curriculum design to
            campus culture.
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
            <p className="eyebrow">Leadership</p>
            <h2>Mr. Raj Kushwaha</h2>
            <p className="spotlight__subtitle">Chairman, Axis Group</p>
            <p>
              With over two decades of experience in education and institution
              building, Mr. Raj Kushwaha has been the driving force behind Axis
              Colleges' growth and success. His vision of creating accessible,
              quality education has transformed thousands of lives.
            </p>
            <p style={{ marginTop: "var(--spacing-sm)" }}>
              Under his leadership, Axis Colleges has grown from a single
              campus to a multi-disciplinary institution serving over 12,000
              students across various programs.
            </p>
          </div>
          <div className="spotlight__image">
            <img src="/assets/people/rajsir.webp" alt="Chairman" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta__content">
          <h2>Ready to Join the Axis Family?</h2>
          <p>
            Explore our programs and discover how Axis Colleges can help you
            achieve your academic and career goals.
          </p>
          <div style={{ display: "flex", gap: "var(--spacing-sm)", justifyContent: "center", flexWrap: "wrap" }}>
            <Link className="btn btn--primary" to="/courses">
              Explore Courses
            </Link>
            <Link className="btn btn--secondary" to="/contact">
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
