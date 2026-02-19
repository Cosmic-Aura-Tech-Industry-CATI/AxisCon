import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Theme.css";

const themes = [
  {
    id: "ai",
    icon: "🤖",
    title: "Artificial Intelligence",
    description: "Intelligent systems, reasoning, and real-world applications.",
    longDescription: "Artificial Intelligence (AI) is revolutionizing how we interact with technology. This theme explores cutting-edge AI technologies, their applications across industries, and the future of intelligent systems that can perceive, reason, learn, and make decisions.",
    color: "#3f4f9d",
    gradient: "linear-gradient(135deg, #3f4f9d 0%, #2d3a7a 100%)",
    topics: [
      "Expert Systems and Knowledge Representation",
      "Natural Language Processing & Understanding",
      "Computer Vision and Image Recognition",
      "Robotics and Autonomous Systems",
      "AI in Healthcare and Diagnostics",
      "Ethical AI and Responsible Innovation",
      "AI-powered Decision Support Systems",
      "Cognitive Computing and Reasoning"
    ],
    applications: [
      "Healthcare diagnostics and treatment planning",
      "Autonomous vehicles and drones",
      "Smart personal assistants (NLP)",
      "Fraud detection in financial services",
      "Predictive maintenance in manufacturing"
    ],
    chairs: [
      { name: "Prof. Rajesh Kumar", institution: "IIT Delhi", role: "Track Chair" },
      { name: "Dr. Priya Sharma", institution: "Axis Institute", role: "Co-Chair" }
    ],
    papers: 45
  },
  {
    id: "ml",
    icon: "📈",
    title: "Machine Learning",
    description: "Predictive models, optimization, and learning algorithms.",
    longDescription: "Machine Learning forms the backbone of modern data-driven applications. This theme covers fundamental and advanced ML algorithms, their theoretical foundations, and practical implementations across various domains.",
    color: "#ffc107",
    gradient: "linear-gradient(135deg, #ffc107 0%, #ffa000 100%)",
    topics: [
      "Supervised and Unsupervised Learning",
      "Deep Learning Architectures",
      "Reinforcement Learning",
      "Ensemble Methods and Boosting",
      "Feature Engineering and Selection",
      "Model Interpretability and Explainability",
      "Transfer Learning and Domain Adaptation",
      "Online and Active Learning"
    ],
    applications: [
      "Recommendation systems",
      "Predictive analytics in business",
      "Image and speech recognition",
      "Anomaly detection in cybersecurity",
      "Personalized learning platforms"
    ],
    chairs: [
      { name: "Dr. Amit Verma", institution: "NIT Trichy", role: "Track Chair" },
      { name: "Prof. Neha Gupta", institution: "Axis Institute", role: "Co-Chair" }
    ],
    papers: 38
  },
  {
    id: "ci",
    icon: "🧠",
    title: "Computational Intelligence",
    description: "Neural, fuzzy, and evolutionary computing approaches.",
    longDescription: "Computational Intelligence combines nature-inspired computational methodologies to address complex real-world problems. This theme explores neural networks, fuzzy systems, evolutionary algorithms, and their hybrid approaches.",
    color: "#e53935",
    gradient: "linear-gradient(135deg, #e53935 0%, #c62828 100%)",
    topics: [
      "Artificial Neural Networks",
      "Fuzzy Logic and Fuzzy Systems",
      "Evolutionary Algorithms (GA, PSO, DE)",
      "Swarm Intelligence",
      "Hybrid Intelligent Systems",
      "Neuro-Fuzzy Systems",
      "Memetic Algorithms",
      "Artificial Immune Systems"
    ],
    applications: [
      "Optimization in engineering design",
      "Pattern recognition",
      "Control systems and robotics",
      "Time series prediction",
      "Bioinformatics and computational biology"
    ],
    chairs: [
      { name: "Prof. Sunita Patel", institution: "BITS Pilani", role: "Track Chair" },
      { name: "Dr. Vikram Singh", institution: "Axis Institute", role: "Co-Chair" }
    ],
    papers: 32
  },
  {
    id: "st",
    icon: "🛰️",
    title: "Smart Technologies",
    description: "Automation, smart systems, and digital transformation.",
    longDescription: "Smart Technologies are reshaping our world through interconnected systems and intelligent automation. This theme focuses on the development and integration of smart systems across industries, from IoT to Industry 4.0.",
    color: "#00bcd4",
    gradient: "linear-gradient(135deg, #00bcd4 0%, #00838f 100%)",
    topics: [
      "Internet of Things (IoT) and IIoT",
      "Smart Cities and Urban Computing",
      "Industry 4.0 and Smart Manufacturing",
      "Ambient Intelligence and Smart Environments",
      "Cyber-Physical Systems",
      "Wearable Technology and Smart Sensors",
      "Edge and Fog Computing",
      "Smart Grid and Energy Management"
    ],
    applications: [
      "Smart home automation",
      "Industrial process optimization",
      "Intelligent transportation systems",
      "Precision agriculture",
      "Smart healthcare monitoring"
    ],
    chairs: [
      { name: "Dr. Anil Joshi", institution: "IIT Bombay", role: "Track Chair" },
      { name: "Prof. Meera Nair", institution: "Axis Institute", role: "Co-Chair" }
    ],
    papers: 28
  },
  {
    id: "ds",
    icon: "📊",
    title: "Data Science",
    description: "Analytics, visualization, and data-driven decisions.",
    longDescription: "Data Science combines statistics, mathematics, and computer science to extract insights from data. This theme covers the entire data science pipeline, from data collection and processing to analysis and visualization.",
    color: "#4caf50",
    gradient: "linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)",
    topics: [
      "Big Data Analytics and Processing",
      "Data Visualization and Storytelling",
      "Statistical Learning and Inference",
      "Time Series Analysis",
      "Text Mining and NLP",
      "Graph Analytics and Network Science",
      "Data Warehousing and ETL",
      "Real-time Data Processing"
    ],
    applications: [
      "Business intelligence and analytics",
      "Social media analysis",
      "Financial market prediction",
      "Customer behavior analysis",
      "Healthcare analytics"
    ],
    chairs: [
      { name: "Dr. Suresh Iyer", institution: "IIIT Bangalore", role: "Track Chair" },
      { name: "Prof. Kavita Reddy", institution: "Axis Institute", role: "Co-Chair" }
    ],
    papers: 35
  },
  {
    id: "it",
    icon: "🔐",
    title: "Information Technology",
    description: "Systems, security, and scalable infrastructure.",
    longDescription: "Information Technology provides the foundation for modern digital systems. This theme explores advancements in IT infrastructure, cybersecurity, cloud computing, and the technologies that power our digital world.",
    color: "#9c27b0",
    gradient: "linear-gradient(135deg, #9c27b0 0%, #6a1b9a 100%)",
    topics: [
      "Cloud Computing and Virtualization",
      "Cybersecurity and Privacy",
      "Blockchain and Distributed Ledgers",
      "Software Engineering and Architecture",
      "Database Systems and Data Management",
      "Network Protocols and Security",
      "DevOps and Continuous Delivery",
      "Quantum Computing and Applications"
    ],
    applications: [
      "Secure communication systems",
      "Enterprise resource planning",
      "Cloud-native applications",
      "Digital identity management",
      "Cryptocurrency and blockchain"
    ],
    chairs: [
      { name: "Prof. Deepak Malhotra", institution: "DRDO", role: "Track Chair" },
      { name: "Dr. Sanjay Gupta", institution: "Axis Institute", role: "Co-Chair" }
    ],
    papers: 25
  }
];

const featuredThemes = themes.slice(0, 3);
const additionalThemes = themes.slice(3);

export default function Theme() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedTheme, setSelectedTheme] = useState(themes[0]);
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="theme-page">
      {/* Hero Section */}
      <section className="theme-hero">
        <div className="theme-hero__content">
          <span className="theme-hero__eyebrow">ICCIST 2026</span>
          <h1 className="theme-hero__title">
            Conference <span>Themes & Tracks</span>
          </h1>
          <p className="theme-hero__description">
            Explore the diverse range of topics and research areas that define
            the future of computational intelligence and smart technologies.
          </p>
          <div className="theme-hero__stats">
            <div className="theme-hero__stat">
              <span className="stat-value">{themes.length}</span>
              <span className="stat-label">Major Themes</span>
            </div>
            <div className="theme-hero__stat">
              <span className="stat-value">40+</span>
              <span className="stat-label">Sub Topics</span>
            </div>
            <div className="theme-hero__stat">
              <span className="stat-value">200+</span>
              <span className="stat-label">Expected Papers</span>
            </div>
          </div>
        </div>
        <div className="theme-hero__pattern"></div>
      </section>

      {/* Featured Themes */}
      <section className="featured-themes">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Explore Themes</span>
            <h2 className="section-title">Featured Research Areas</h2>
            <p className="section-description">
              Discover the key themes that will shape discussions at ICCIST 2026
            </p>
          </div>

          <div className="featured-grid">
            {featuredThemes.map((theme, index) => (
              <div
                key={theme.id}
                className="featured-card"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => setSelectedTheme(theme)}
              >
                <div className="featured-card__gradient" style={{ background: theme.gradient }}></div>
                <div className="featured-card__content">
                  <span className="featured-card__icon">{theme.icon}</span>
                  <h3 className="featured-card__title">{theme.title}</h3>
                  <p className="featured-card__description">{theme.description}</p>
                  <div className="featured-card__stats">
                    <span className="featured-card__stat">
                      <span className="stat-number">{theme.topics.length}</span>
                      <span className="stat-label">Topics</span>
                    </span>
                    <span className="featured-card__stat">
                      <span className="stat-number">{theme.papers}</span>
                      <span className="stat-label">Papers</span>
                    </span>
                  </div>
                  <button className="featured-card__btn">
                    Explore Theme
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Theme Navigation */}
      <section className="theme-navigation">
        <div className="container">
          <div className="theme-tabs">
            {themes.map((theme) => (
              <button
                key={theme.id}
                className={`theme-tab ${selectedTheme.id === theme.id ? 'active' : ''}`}
                onClick={() => setSelectedTheme(theme)}
                style={{ '--theme-color': theme.color }}
              >
                <span className="theme-tab__icon">{theme.icon}</span>
                <span className="theme-tab__title">{theme.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Theme Details */}
      <section className="theme-details">
        <div className="container">
          <div className="theme-details__header">
            <div className="theme-details__icon" style={{ background: selectedTheme.gradient }}>
              {selectedTheme.icon}
            </div>
            <div className="theme-details__title">
              <h2>{selectedTheme.title}</h2>
              <p>{selectedTheme.description}</p>
            </div>
          </div>

          <div className="theme-details__tabs">
            <button
              className={`details-tab ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`details-tab ${activeTab === 'topics' ? 'active' : ''}`}
              onClick={() => setActiveTab('topics')}
            >
              Topics
            </button>
            <button
              className={`details-tab ${activeTab === 'applications' ? 'active' : ''}`}
              onClick={() => setActiveTab('applications')}
            >
              Applications
            </button>
            <button
              className={`details-tab ${activeTab === 'chairs' ? 'active' : ''}`}
              onClick={() => setActiveTab('chairs')}
            >
              Track Chairs
            </button>
          </div>

          <div className="theme-details__content">
            {activeTab === 'overview' && (
              <div className="theme-overview fade-in">
                <div className="overview-text">
                  <h3>About the Theme</h3>
                  <p>{selectedTheme.longDescription}</p>
                </div>
                <div className="overview-stats">
                  <div className="stat-card">
                    <span className="stat-value">{selectedTheme.topics.length}</span>
                    <span className="stat-label">Research Topics</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-value">{selectedTheme.papers}</span>
                    <span className="stat-label">Paper Submissions</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-value">{selectedTheme.chairs.length}</span>
                    <span className="stat-label">Track Chairs</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'topics' && (
              <div className="theme-topics fade-in">
                <h3>Research Topics & Sub-themes</h3>
                <div className="topics-grid">
                  {selectedTheme.topics.map((topic, index) => (
                    <div key={index} className="topic-item">
                      <span className="topic-bullet">•</span>
                      <span className="topic-text">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'applications' && (
              <div className="theme-applications fade-in">
                <h3>Real-World Applications</h3>
                <div className="applications-grid">
                  {selectedTheme.applications.map((app, index) => (
                    <div key={index} className="application-card">
                      <span className="application-icon">⚡</span>
                      <p>{app}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'chairs' && (
              <div className="theme-chairs fade-in">
                <h3>Track Chairs & Committee</h3>
                <div className="chairs-grid">
                  {selectedTheme.chairs.map((chair, index) => (
                    <div key={index} className="chair-card">
                      <div className="chair-avatar">
                        {chair.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="chair-info">
                        <h4>{chair.name}</h4>
                        <p className="chair-role">{chair.role}</p>
                        <p className="chair-institution">{chair.institution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* All Themes Grid */}
      <section className="all-themes">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Complete List</span>
            <h2 className="section-title">All Conference Themes</h2>
            <p className="section-description">
              Explore the full spectrum of research areas at ICCIST 2026
            </p>
          </div>

          <div className="themes-grid">
            {additionalThemes.map((theme) => (
              <div
                key={theme.id}
                className="theme-card"
                onClick={() => {
                  setSelectedTheme(theme);
                  window.scrollTo({ top: 600, behavior: 'smooth' });
                }}
              >
                <div className="theme-card__header" style={{ background: theme.gradient }}>
                  <span className="theme-card__icon">{theme.icon}</span>
                </div>
                <div className="theme-card__body">
                  <h3 className="theme-card__title">{theme.title}</h3>
                  <p className="theme-card__description">{theme.description}</p>
                  <div className="theme-card__meta">
                    <span className="theme-card__topics">{theme.topics.length} Topics</span>
                    <span className="theme-card__papers">{theme.papers} Papers</span>
                  </div>
                  <button className="theme-card__btn">
                    View Details
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M9 5l7 7-7 7" strokeWidth="2"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call for Papers */}
      <section className="theme-cfp">
        <div className="container">
          <div className="cfp-card">
            <div className="cfp-content">
              <h2>Call for Papers</h2>
              <p>
                Submit your research to ICCIST 2026 and contribute to the advancement
                of computational intelligence and smart technologies.
              </p>
              <div className="cfp-dates">
                <div className="cfp-date">
                  <span className="date-label">Submission Deadline</span>
                  <span className="date-value">March 25, 2026</span>
                </div>
                <div className="cfp-date">
                  <span className="date-label">Notification Date</span>
                  <span className="date-value">As per submission</span>
                </div>
                <div className="cfp-date">
                  <span className="date-label">Conference Dates</span>
                  <span className="date-value">April 4-5, 2026</span>
                </div>
              </div>
              <div className="cfp-actions">
                <Link to="/conference" className="btn btn--primary">
                  View Full Details
                </Link>
                <Link to="/schedule" className="btn btn--secondary">
                  Important Dates
                </Link>
              </div>
            </div>
            <div className="cfp-image">
              <img src="/assets/cta/cta-1.jpg" alt="Call for Papers" />
            </div>
          </div>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="submission-guidelines">
        <div className="container">
          <div className="guidelines-grid">
            <div className="guideline-item">
              <div className="guideline-icon">📝</div>
              <h3>Paper Format</h3>
              <p>IEEE conference template, 4-6 pages, including figures and references</p>
            </div>
            <div className="guideline-item">
              <div className="guideline-icon">🔍</div>
              <h3>Review Process</h3>
              <p>Double-blind peer review by at least 2-3 expert reviewers</p>
            </div>
            <div className="guideline-item">
              <div className="guideline-icon">📊</div>
              <h3>Publication</h3>
              <p>Accepted papers will be submitted for inclusion in IEEE Xplore</p>
            </div>
            <div className="guideline-item">
              <div className="guideline-icon">🎯</div>
              <h3>Topics</h3>
              <p>Original research aligned with conference themes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="theme-cta">
        <div className="container">
          <div className="theme-cta__content">
            <h2>Ready to Submit Your Research?</h2>
            <p>
              Join researchers from around the world at ICCIST 2026 and showcase
              your work to a global audience.
            </p>
            <div className="theme-cta__actions">
              <Link to="/contact" className="btn btn--primary">Contact Us</Link>
              <Link to="/conference" className="btn btn--secondary">Learn More</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}