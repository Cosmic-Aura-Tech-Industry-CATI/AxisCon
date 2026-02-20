import { Link } from "react-router-dom";
import { useEffect } from "react";
import Seo from "../components/Seo";
import "./About.css";

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <Seo
        title="About Axis Institute of Technology and Management"
        description="Learn about Axis Institute of Technology and Management, approvals, affiliations, mission, and institutional values powering ICCIST 2026."
        path="/about"
        keywords={[
          "Axis Institute of Technology and Management",
          "about Axis Colleges",
          "AICTE approved college",
          "AKTU affiliated institute",
          "engineering college Kanpur"
        ]}
      />
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero__content">
          <span className="about-hero__eyebrow">About AITM</span>
          <h1 className="about-hero__title">
            Axis Institute of Technology and Management
          </h1>
          <p className="about-hero__description">
            Approved by AICTE New Delhi, affiliated to AKTU and BTEUP Lucknow.
          </p>
          <div className="about-hero__actions">
            <Link to="/conference" className="btn btn--primary">Explore ICCIST 2026</Link>
            <Link to="/contact" className="btn btn--secondary">Contact Us</Link>
          </div>
        </div>
        <div className="about-hero__pattern"></div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="container">
          <div className="about-mission__card">
            <div className="about-mission__content">
              <span className="eyebrow">Our Purpose</span>
              <h2>Technology for Practical Impact</h2>
              <p className="about-mission__quote">
                "Technology means the systematic application of scientific or other organized knowledge to practical tasks."
              </p>
              <p style={{ textAlign: "justify" }}>
  This is what we seek at Axis Institute of Technology and Management. 
  At Axis Colleges, we follow a technology-based, learner-centric, and 
  result-oriented approach that enhances students' learning and performance capabilities.
</p>

            </div>
            <div className="about-mission__image">
              <img src="/assets/brand/axis-logo.webp" alt="Axis Colleges" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="container">
          <div className="section__heading">
            <span className="eyebrow">Our Values</span>
            <h2>What We Stand For</h2>
            <p className="section__subtitle">
              Axis Colleges is passionate about grooming the nation's youth to grow into excellent 
              professionals and good human beings.
            </p>
          </div>

          <div className="about-values__grid">
            {values.map((value, index) => (
              <div key={index} className="about-values__card">
                <div className="about-values__icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="about-cta__content">
            <h2>Learn More About ICCIST 2026</h2>
            <p>
              Stay informed about conference updates, important dates, and registration details.
            </p>
            <div className="about-cta__actions">
              <Link to="/conference" className="btn btn--primary">Visit Conference Page</Link>
              <Link to="/contact" className="btn btn--secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}