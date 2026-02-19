import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Seo from "../components/Seo";
import "./Committee.css";

const organizingCommittee = [
  {
    name: "Prof. Rajesh Kumar",
    role: "General Chair",
    institution: "Axis Institute of Technology",
    expertise: "Artificial Intelligence, Machine Learning",
    image: "/assets/committee/placeholder1.jpg",
    social: {
      linkedin: "#",
      email: "rajesh.kumar@axiscolleges.edu"
    }
  },
  {
    name: "Dr. Priya Sharma",
    role: "Program Chair",
    institution: "Axis Institute of Technology",
    expertise: "Data Science, Big Data Analytics",
    image: "/assets/committee/placeholder2.jpg",
    social: {
      linkedin: "#",
      email: "priya.sharma@axiscolleges.edu"
    }
  },
  {
    name: "Dr. Amit Verma",
    role: "Organizing Secretary",
    institution: "Axis Institute of Technology",
    expertise: "Computer Networks, Cybersecurity",
    image: "/assets/committee/placeholder3.jpg",
    social: {
      linkedin: "#",
      email: "amit.verma@axiscolleges.edu"
    }
  },
  {
    name: "Prof. Sunita Patel",
    role: "Technical Program Chair",
    institution: "Axis Institute of Technology",
    expertise: "Cloud Computing, IoT",
    image: "/assets/committee/placeholder4.jpg",
    social: {
      linkedin: "#",
      email: "sunita.patel@axiscolleges.edu"
    }
  },
  {
    name: "Dr. Vikram Singh",
    role: "Finance Chair",
    institution: "Axis Institute of Technology",
    expertise: "Economics, Research Analytics",
    image: "/assets/committee/placeholder5.jpg",
    social: {
      linkedin: "#",
      email: "vikram.singh@axiscolleges.edu"
    }
  },
  {
    name: "Prof. Neha Gupta",
    role: "Publicity Chair",
    institution: "Axis Institute of Technology",
    expertise: "Digital Marketing, Communications",
    image: "/assets/committee/placeholder6.jpg",
    social: {
      linkedin: "#",
      email: "neha.gupta@axiscolleges.edu"
    }
  }
];

const nationalAdvisory = [
  {
    name: "Dr. Ramesh Chandra",
    role: "Professor Emeritus",
    institution: "IIT Delhi",
    expertise: "Computer Science, AI"
  },
  {
    name: "Prof. Suresh Iyer",
    role: "Dean Research",
    institution: "IIT Bombay",
    expertise: "Machine Learning, Neural Networks"
  },
  {
    name: "Dr. Meera Nair",
    role: "Director",
    institution: "IIIT Bangalore",
    expertise: "Data Science, Analytics"
  },
  {
    name: "Prof. Anil Joshi",
    role: "Head - CSE",
    institution: "NIT Trichy",
    expertise: "Cybersecurity, Cryptography"
  },
  {
    name: "Dr. Kavita Reddy",
    role: "Professor",
    institution: "BITS Pilani",
    expertise: "Cloud Computing, Distributed Systems"
  },
  {
    name: "Prof. Deepak Malhotra",
    role: "Senior Scientist",
    institution: "DRDO",
    expertise: "Defense Technology, AI"
  },
  {
    name: "Dr. Sanjay Gupta",
    role: "Chief Technology Officer",
    institution: "TechMahindra",
    expertise: "Enterprise Solutions, Innovation"
  },
  {
    name: "Prof. Lata Singh",
    role: "Professor",
    institution: "JNU Delhi",
    expertise: "Computational Linguistics, NLP"
  }
];

const internationalAdvisory = [
  {
    name: "Dr. John Smith",
    role: "Professor",
    institution: "MIT, USA",
    expertise: "Artificial Intelligence, Robotics",
    country: "🇺🇸"
  },
  {
    name: "Prof. Maria Garcia",
    role: "Director of Research",
    institution: "Technical University of Munich, Germany",
    expertise: "Machine Learning, Computer Vision",
    country: "🇩🇪"
  },
  {
    name: "Dr. Chen Wei",
    role: "Professor",
    institution: "Tsinghua University, China",
    expertise: "Data Science, Big Data",
    country: "🇨🇳"
  },
  {
    name: "Prof. Sarah Johnson",
    role: "Head of Department",
    institution: "University of Cambridge, UK",
    expertise: "Computational Intelligence, Neural Networks",
    country: "🇬🇧"
  },
  {
    name: "Dr. Pierre Dubois",
    role: "Research Director",
    institution: "INRIA, France",
    expertise: "Cryptography, Security",
    country: "🇫🇷"
  },
  {
    name: "Prof. Yuki Tanaka",
    role: "Professor",
    institution: "University of Tokyo, Japan",
    expertise: "Robotics, Automation",
    country: "🇯🇵"
  },
  {
    name: "Dr. Michael Brown",
    role: "Senior Researcher",
    institution: "Google AI, USA",
    expertise: "Deep Learning, Reinforcement Learning",
    country: "🇺🇸"
  },
  {
    name: "Prof. Elena Petrova",
    role: "Head of Computer Science",
    institution: "Moscow State University, Russia",
    expertise: "Theoretical Computer Science, Algorithms",
    country: "🇷🇺"
  }
];

const technicalReviewCommittee = [
  {
    name: "Dr. Arun Prakash",
    area: "Machine Learning",
    institution: "IIT Roorkee"
  },
  {
    name: "Prof. Shalini Mishra",
    area: "Data Science",
    institution: "NIT Warangal"
  },
  {
    name: "Dr. Rajeev Ranjan",
    area: "Computer Networks",
    institution: "IIIT Allahabad"
  },
  {
    name: "Prof. Anuradha Sharma",
    area: "Artificial Intelligence",
    institution: "DTU Delhi"
  },
  {
    name: "Dr. Manoj Tiwari",
    area: "Cloud Computing",
    institution: "VIT Vellore"
  },
  {
    name: "Prof. Richa Singh",
    area: "Computer Vision",
    institution: "IIIT Delhi"
  },
  {
    name: "Dr. Srikant Reddy",
    area: "Cybersecurity",
    institution: "BITS Hyderabad"
  },
  {
    name: "Prof. Nidhi Gupta",
    area: "IoT",
    institution: "Thapar University"
  },
  {
    name: "Dr. Karthik Subramanian",
    area: "Big Data",
    institution: "IIT Madras"
  },
  {
    name: "Prof. Pooja Mehta",
    area: "NLP",
    institution: "IIIT Hyderabad"
  }
];

export default function Committee() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState("organizing");
  const [searchTerm, setSearchTerm] = useState("");

  const renderCommittee = () => {
    switch(activeTab) {
      case "organizing":
        return organizingCommittee;
      case "national":
        return nationalAdvisory;
      case "international":
        return internationalAdvisory;
      case "technical":
        return technicalReviewCommittee;
      default:
        return [];
    }
  };

  const filteredCommittee = renderCommittee().filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.institution?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.expertise?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="committee-page">
      <Seo
        title="Conference Committee"
        description="Meet ICCIST 2026 organizing, advisory, and technical committee members from academia and industry."
        path="/committee"
        keywords={[
          "ICCIST committee",
          "organizing committee",
          "advisory board",
          "technical review committee",
          "conference leadership"
        ]}
      />
      {/* Hero Section */}
      <section className="committee-hero">
        <div className="committee-hero__content">
          <span className="committee-hero__eyebrow">Conference Leadership</span>
          <h1 className="committee-hero__title">
            ICCIST 2026 <span>Committee</span>
          </h1>
          <p className="committee-hero__description">
            Meet the distinguished experts and leaders who are shaping the future of 
            computational intelligence through ICCIST 2026.
          </p>
          <div className="committee-hero__stats">
            <div className="committee-hero__stat">
              <span className="stat-value">50+</span>
              <span className="stat-label">Committee Members</span>
            </div>
            <div className="committee-hero__stat">
              <span className="stat-value">15+</span>
              <span className="stat-label">Countries</span>
            </div>
            <div className="committee-hero__stat">
              <span className="stat-value">30+</span>
              <span className="stat-label">Institutions</span>
            </div>
          </div>
        </div>
        <div className="committee-hero__pattern"></div>
      </section>

      {/* Committee Navigation */}
      <section className="committee-nav">
        <div className="container">
          <div className="committee-tabs">
            <button 
              className={`committee-tab ${activeTab === 'organizing' ? 'active' : ''}`}
              onClick={() => setActiveTab('organizing')}
            >
              <span className="tab-icon">👥</span>
              <span className="tab-label">Organizing Committee</span>
              <span className="tab-count">{organizingCommittee.length}</span>
            </button>
            <button 
              className={`committee-tab ${activeTab === 'national' ? 'active' : ''}`}
              onClick={() => setActiveTab('national')}
            >
              <span className="tab-icon">🇮🇳</span>
              <span className="tab-label">National Advisory</span>
              <span className="tab-count">{nationalAdvisory.length}</span>
            </button>
            <button 
              className={`committee-tab ${activeTab === 'international' ? 'active' : ''}`}
              onClick={() => setActiveTab('international')}
            >
              <span className="tab-icon">🌍</span>
              <span className="tab-label">International Advisory</span>
              <span className="tab-count">{internationalAdvisory.length}</span>
            </button>
            <button 
              className={`committee-tab ${activeTab === 'technical' ? 'active' : ''}`}
              onClick={() => setActiveTab('technical')}
            >
              <span className="tab-icon">🔬</span>
              <span className="tab-label">Technical Review</span>
              <span className="tab-count">{technicalReviewCommittee.length}</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="committee-search">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth="2"/>
            </svg>
            <input 
              type="text"
              placeholder="Search committee members by name, institution, or expertise..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button className="search-clear" onClick={() => setSearchTerm("")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12" strokeWidth="2"/>
                </svg>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Committee Grid */}
      <section className="committee-grid-section">
        <div className="container">
          {/* Organizing Committee Grid */}
          {activeTab === 'organizing' && (
            <div className="committee-grid organizing-grid">
              {filteredCommittee.map((member, index) => (
                <div key={index} className="committee-card organizing-card">
                  <div className="committee-card__image-wrapper">
                    <div className="committee-card__image-placeholder">
                      <span className="placeholder-initials">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="committee-card__social">
                      <a href={`mailto:${member.social.email}`} className="social-link email">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth="2"/>
                        </svg>
                      </a>
                      <a href={member.social.linkedin} className="social-link linkedin">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" strokeWidth="2"/>
                          <circle cx="4" cy="4" r="2" strokeWidth="2"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="committee-card__content">
                    <h3 className="committee-card__name">{member.name}</h3>
                    <span className="committee-card__role">{member.role}</span>
                    <span className="committee-card__institution">{member.institution}</span>
                    <p className="committee-card__expertise">{member.expertise}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* National Advisory Grid */}
          {activeTab === 'national' && (
            <div className="committee-grid advisory-grid">
              {filteredCommittee.map((member, index) => (
                <div key={index} className="committee-card advisory-card">
                  <div className="committee-card__content">
                    <div className="committee-card__header">
                      <h3 className="committee-card__name">{member.name}</h3>
                      <span className="committee-card__role">{member.role}</span>
                    </div>
                    <span className="committee-card__institution">{member.institution}</span>
                    <p className="committee-card__expertise">{member.expertise}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* International Advisory Grid */}
          {activeTab === 'international' && (
            <div className="committee-grid international-grid">
              {filteredCommittee.map((member, index) => (
                <div key={index} className="committee-card international-card">
                  <div className="committee-card__content">
                    <div className="committee-card__header">
                      <h3 className="committee-card__name">{member.name}</h3>
                      <span className="committee-card__country">{member.country}</span>
                    </div>
                    <span className="committee-card__role">{member.role}</span>
                    <span className="committee-card__institution">{member.institution}</span>
                    <p className="committee-card__expertise">{member.expertise}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Technical Review Grid */}
          {activeTab === 'technical' && (
            <div className="committee-grid technical-grid">
              {filteredCommittee.map((member, index) => (
                <div key={index} className="committee-card technical-card">
                  <div className="committee-card__content">
                    <h3 className="committee-card__name">{member.name}</h3>
                    <span className="committee-card__area">{member.area}</span>
                    <span className="committee-card__institution">{member.institution}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {filteredCommittee.length === 0 && (
            <div className="committee-empty">
              <div className="committee-empty__icon">🔍</div>
              <h3>No committee members found</h3>
              <p>Try adjusting your search criteria</p>
              <button className="btn btn--primary" onClick={() => setSearchTerm("")}>
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call for Reviewers */}
      <section className="committee-cta">
        <div className="container">
          <div className="committee-cta__card">
            <div className="committee-cta__content">
              <h2>Join the Committee</h2>
              <p>
                We are always looking for distinguished experts to join our technical review committee. 
                If you're interested in contributing to ICCIST 2026, we'd love to hear from you.
              </p>
              <div className="committee-cta__actions">
                <Link to="/contact" className="btn btn--primary">
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 4v16m-8-8h16" strokeWidth="2"/>
                  </svg>
                  Express Interest
                </Link>
                <Link to="/conference" className="btn btn--secondary">
                  Learn More About Conference
                </Link>
              </div>
            </div>
            <div className="committee-cta__image">
              <div className="cta-image-grid">
                <span>👥</span>
                <span>🔬</span>
                <span>🌍</span>
                <span>📚</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Committee Guidelines */}
      <section className="committee-guidelines">
        <div className="container">
          <div className="guidelines-grid">
            <div className="guideline-card">
              <div className="guideline-icon">📋</div>
              <h3>Review Process</h3>
              <p>Double-blind peer review ensuring quality and fairness in paper selection.</p>
            </div>
            <div className="guideline-card">
              <div className="guideline-icon">⏱️</div>
              <h3>Timeline</h3>
              <p>Reviews completed within 3-4 weeks of submission deadline.</p>
            </div>
            <div className="guideline-card">
              <div className="guideline-icon">🎯</div>
              <h3>Scope</h3>
              <p>Evaluation based on originality, technical depth, and relevance.</p>
            </div>
            <div className="guideline-card">
              <div className="guideline-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>Work with international experts to shape conference quality.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}