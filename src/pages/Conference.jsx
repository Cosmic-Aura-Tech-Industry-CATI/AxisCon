const speakers = [
  {
    name: "Dr. Anil Kumar",
    role: "Chief Scientist, ISRO",
    image: "https://i.pravatar.cc/150?u=anil",
    bio: "Leading expert in space technology and satellite communications.",
  },
  {
    name: "Prof. Meera Sharma",
    role: "IIT Delhi",
    image: "https://i.pravatar.cc/150?u=meera",
    bio: "Renowned researcher in artificial intelligence and machine learning.",
  },
  {
    name: "Mr. Rahul Verma",
    role: "CEO, TechVentures",
    image: "https://i.pravatar.cc/150?u=rahul",
    bio: "Serial entrepreneur and startup mentor with 15+ years experience.",
  },
  {
    name: "Dr. Priya Patel",
    role: "Director, AIIMS",
    image: "https://i.pravatar.cc/150?u=priya",
    bio: "Medical researcher specializing in biotechnology and genomics.",
  },
];

const schedule = [
  {
    time: "9:00 AM - 10:00 AM",
    title: "Registration & Welcome Coffee",
    speaker: "Organizing Committee",
    description: "Check-in, networking, and light refreshments.",
  },
  {
    time: "10:00 AM - 11:00 AM",
    title: "Inaugural Ceremony",
    speaker: "Mr. Raj Kushwaha, Chairman",
    description: "Opening address and conference overview by college leadership.",
  },
  {
    time: "11:00 AM - 12:30 PM",
    title: "Keynote: Future of Technology",
    speaker: "Dr. Anil Kumar, ISRO",
    description: "Exploring emerging technologies and their impact on society.",
  },
  {
    time: "12:30 PM - 1:30 PM",
    title: "Lunch Break",
    speaker: "Networking Session",
    description: "Buffet lunch and informal networking with speakers and attendees.",
  },
  {
    time: "1:30 PM - 3:00 PM",
    title: "Panel Discussion: AI & Innovation",
    speaker: "Prof. Meera Sharma & Industry Experts",
    description: "Interactive discussion on AI applications in various industries.",
  },
  {
    time: "3:00 PM - 4:00 PM",
    title: "Entrepreneurship Workshop",
    speaker: "Mr. Rahul Verma",
    description: "Building successful startups: lessons from the field.",
  },
  {
    time: "4:00 PM - 5:00 PM",
    title: "Research Presentations",
    speaker: "Student Researchers",
    description: "Showcase of innovative student research projects and papers.",
  },
  {
    time: "5:00 PM - 6:00 PM",
    title: "Closing Ceremony & Awards",
    speaker: "Organizing Committee",
    description: "Certificate distribution and best paper awards.",
  },
];

const topics = [
  {
    icon: "🤖",
    title: "Artificial Intelligence",
    description: "Machine learning, deep learning, and AI applications",
  },
  {
    icon: "🔒",
    title: "Cybersecurity",
    description: "Network security, ethical hacking, and data protection",
  },
  {
    icon: "☁️",
    title: "Cloud Computing",
    description: "Cloud architecture, DevOps, and scalable systems",
  },
  {
    icon: "🧬",
    title: "Biotechnology",
    description: "Genetic engineering, medical research, and innovations",
  },
  {
    icon: "🌱",
    title: "Sustainability",
    description: "Green technology and environmental solutions",
  },
  {
    icon: "📱",
    title: "Mobile Technology",
    description: "App development, IoT, and mobile innovations",
  },
];

export default function Conference() {
  return (
    <div className="page">
      <div className="conference-hero">
        <div className="conference-info">
          <p className="eyebrow">Annual Conference 2024</p>
          <h1>Innovation & Technology Summit</h1>
          <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", marginBottom: "var(--spacing-md)" }}>
            Join leading researchers, industry experts, and students for a day of
            learning, networking, and innovation at Axis Colleges.
          </p>
          <div className="conference-date">
            <span>📅</span>
            <span>May 10-12, 2024 | Axis Colleges Campus</span>
          </div>
          <div style={{ marginTop: "var(--spacing-lg)", display: "flex", gap: "var(--spacing-sm)", justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn btn--primary" href="mailto:conference@axiscolleges.org">
              Register Now
            </a>
            <a className="btn btn--ghost" href="#schedule">
              View Schedule
            </a>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="conference-stats">
          <div className="stat-card">
            <div className="stat-card__value">500+</div>
            <div className="stat-card__label">Expected Participants</div>
          </div>
          <div className="stat-card">
            <div className="stat-card__value">20+</div>
            <div className="stat-card__label">Expert Speakers</div>
          </div>
          <div className="stat-card">
            <div className="stat-card__value">50+</div>
            <div className="stat-card__label">Research Papers</div>
          </div>
          <div className="stat-card">
            <div className="stat-card__value">3</div>
            <div className="stat-card__label">Days of Learning</div>
          </div>
        </div>
      </section>

      <section className="section facilities">
        <div className="section__heading">
          <p className="eyebrow">Featured Speakers</p>
          <h2>Learn from the Best</h2>
          <p className="section__subtitle">
            Industry leaders and renowned academics sharing insights on cutting-edge
            technologies and research.
          </p>
        </div>
        <div className="speakers-grid">
          {speakers.map((speaker) => (
            <div key={speaker.name} className="speaker-card">
              <img src={speaker.image} alt={speaker.name} loading="lazy" />
              <h3>{speaker.name}</h3>
              <p className="speaker-card__role">{speaker.role}</p>
              <p>{speaker.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="schedule">
        <div className="section__heading">
          <p className="eyebrow">Day 1 Schedule</p>
          <h2>Conference Timeline</h2>
          <p className="section__subtitle">
            Detailed agenda for the first day of the conference. Full schedule will
            be released soon.
          </p>
        </div>
        <div className="schedule-timeline">
          {schedule.map((item) => (
            <div key={item.time} className="schedule-item">
              <div className="schedule-time">{item.time}</div>
              <h4>{item.title}</h4>
              <div className="schedule-speaker">{item.speaker}</div>
              <p className="schedule-description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section events">
        <div className="section__heading">
          <p className="eyebrow">Topics</p>
          <h2>Conference Themes</h2>
          <p className="section__subtitle">
            Explore diverse topics spanning technology, healthcare, sustainability,
            and innovation.
          </p>
        </div>
        <div className="topics-grid">
          {topics.map((topic) => (
            <div key={topic.title} className="topic-card">
              <div className="topic-icon">{topic.icon}</div>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section facilities">
        <div className="section__heading">
          <p className="eyebrow">Participation</p>
          <h2>Who Should Attend?</h2>
        </div>
        <div className="facilities__grid">
          <div className="facility-card">
            <div style={{ fontSize: "3rem", textAlign: "center" }}>🎓</div>
            <h3>Students</h3>
            <p>
              Undergraduate and postgraduate students interested in research,
              innovation, and networking with industry professionals.
            </p>
          </div>
          <div className="facility-card">
            <div style={{ fontSize: "3rem", textAlign: "center" }}>👨‍🔬</div>
            <h3>Researchers</h3>
            <p>
              Academic researchers and faculty members looking to present their work
              and collaborate with peers.
            </p>
          </div>
          <div className="facility-card">
            <div style={{ fontSize: "3rem", textAlign: "center" }}>💼</div>
            <h3>Industry Professionals</h3>
            <p>
              Corporate professionals seeking insights into emerging technologies and
              academic research trends.
            </p>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta__content">
          <h2>Register for the Conference</h2>
          <p>
            Limited seats available! Secure your spot at this premier technology and
            innovation summit. Early bird discount ends soon.
          </p>
          <div style={{ display: "flex", gap: "var(--spacing-sm)", justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn btn--primary" href="mailto:conference@axiscolleges.org">
              Register Now
            </a>
            <a className="btn btn--secondary" href="mailto:papers@axiscolleges.org">
              Submit Paper
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
