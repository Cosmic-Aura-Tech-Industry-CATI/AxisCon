import { Link } from "react-router-dom";
import { useEffect } from "react";
import Seo from "../components/Seo";

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Seo
        title="ICCIST 2026 Conference"
        description="Official ICCIST 2026 website by Axis Colleges for conference details, important dates, themes, committee updates, and registration."
        path="/"
        keywords={[
          "ICCIST 2026 official website",
          "Axis Colleges conference",
          "computational intelligence conference",
          "smart technologies conference India",
          "conference registration 2026"
        ]}
        faqs={[
          {
            question: "When is ICCIST 2026 taking place?",
            answer: "ICCIST 2026 is scheduled for 4th and 5th April 2026."
          },
          {
            question: "Who can participate in ICCIST 2026?",
            answer: "Researchers, faculty, students, and industry professionals can participate in ICCIST 2026."
          }
        ]}
      />
      <header className="hero">
        <div className="hero__content">
          <div className="hero__text">
            <h2 className="hero__tag">ICCIST 2026</h2>
            <h1 style={{fontSize:"clamp(1.5rem, 5vw, 3rem);"}}>
              International Conference on Computational Intelligence
               and Smart Technologies
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
