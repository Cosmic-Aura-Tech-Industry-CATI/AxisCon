const courses = [
  {
    title: "M-Tech",
    subtitle: "Engineering Program",
    image: "/assets/courses/mtech.jpg",
    link: "https://axiscolleges.org/mtech/",
    description: "Advanced engineering program for aspiring innovators and researchers.",
  },
  {
    title: "B-Tech",
    subtitle: "Engineering Program",
    image: "/assets/courses/btech.jpg",
    link: "https://axiscolleges.org/btech/",
    description: "Comprehensive undergraduate engineering with multiple specializations.",
  },
  {
    title: "Polytechnic",
    subtitle: "Diploma Program",
    image: "/assets/courses/polytechnic.jpg",
    link: "https://axiscolleges.org/polytechnic/",
    description: "Hands-on technical education for immediate industry readiness.",
  },
  {
    title: "B-Arch | Interior Design",
    subtitle: "Architecture Program",
    image: "/assets/courses/barch-interior.jpg",
    link: "https://axiscolleges.org/barch/",
    description: "Creative architecture and design programs for future architects.",
  },
  {
    title: "B.FAD | Textile Design",
    subtitle: "Fashion & Garment Technology",
    image: "/assets/courses/bfad-textile.jpg",
    link: "https://axiscolleges.org/bfad/",
    description: "Fashion design and textile technology for creative minds.",
  },
  {
    title: "MBA",
    subtitle: "Business Administration",
    image: "/assets/courses/mba.jpg",
    link: "https://axiscolleges.org/mba/",
    description: "Postgraduate business program developing future business leaders.",
  },
  {
    title: "MCA",
    subtitle: "Master Degree Program",
    image: "/assets/courses/mca.webp",
    link: "https://axiscolleges.org/mca/",
    description: "Advanced computer applications program for tech professionals.",
  },
  {
    title: "B-Pharma",
    subtitle: "Pharmacy Program",
    image: "/assets/courses/bpharma.jpg",
    link: "https://axiscolleges.org/bpharm/",
    description: "Undergraduate pharmacy program with clinical focus.",
  },
  {
    title: "D-Pharma",
    subtitle: "Pharmacy Program",
    image: "/assets/courses/dpharma.jpg",
    link: "https://axiscolleges.org/dpharm/",
    description: "Diploma in pharmacy for quick entry into pharmaceutical field.",
  },
  {
    title: "B.Sc. BioTech | BMM",
    subtitle: "Medical Program",
    image: "/assets/courses/bsc-biotech.jpg",
    link: "https://axiscolleges.org/bsc/",
    description: "Life sciences and biotechnology programs for medical aspirants.",
  },
  {
    title: "B.FA (Fine Arts)",
    subtitle: "Fine Arts Program",
    image: "/assets/courses/bfa-fine-arts.jpg",
    link: "https://axiscolleges.org/bfa/",
    description: "Traditional and contemporary fine arts education.",
  },
  {
    title: "B.FA (Films)",
    subtitle: "Films & Television",
    image: "/assets/courses/bfa-films.jpg",
    link: "https://axiscolleges.org/bfa/",
    description: "Film production and television arts program.",
  },
  {
    title: "BBA",
    subtitle: "Professional Program",
    image: "/assets/courses/bba.webp",
    link: "https://axiscolleges.org/bba/",
    description: "Undergraduate business administration for young entrepreneurs.",
  },
  {
    title: "BCA",
    subtitle: "Professional Program",
    image: "/assets/courses/bca.jpg",
    link: "https://axiscolleges.org/bca/",
    description: "Computer applications program for software development careers.",
  },
  {
    title: "Garment Technology",
    subtitle: "Diploma Program",
    image: "/assets/courses/garment-tech.jpg",
    link: "https://axiscolleges.org/garment-technology/",
    description: "Specialized program in garment manufacturing and technology.",
  },
];

const categories = [
  { name: "All", filter: "all" },
  { name: "Engineering", filter: "Engineering" },
  { name: "Pharmacy", filter: "Pharmacy" },
  { name: "Business", filter: "Business" },
  { name: "Arts & Design", filter: "Arts" },
];

export default function Courses() {
  return (
    <div className="page">
      <div className="page__header">
        <p className="eyebrow">Programs</p>
        <h1>Explore Our Courses</h1>
        <p>
          Choose from over 20 programs across engineering, medical, business,
          and creative disciplines. Each program is designed to provide
          industry-relevant skills and practical knowledge.
        </p>
      </div>

      <section className="section">
        <div className="section__heading">
          <h2>All Programs</h2>
          <p className="section__subtitle">
            Curated pathways for engineering, design, management, pharmacy, and life
            sciences with state-of-the-art facilities and expert faculty.
          </p>
        </div>
        <div className="courses__grid">
          {courses.map((course) => (
            <article key={course.title} className="course-card">
              <div className="course-card__image">
                <img src={course.image} alt={course.title} loading="lazy" />
              </div>
              <div className="course-card__body">
                <h3>{course.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "var(--spacing-xs)" }}>
                  {course.subtitle}
                </p>
                <p style={{ fontSize: "0.9rem", marginBottom: "var(--spacing-sm)" }}>
                  {course.description}
                </p>
                <a
                  className="course-card__link"
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section facilities">
        <div className="section__heading">
          <p className="eyebrow">Why Choose Axis</p>
          <h2>What Makes Us Different</h2>
        </div>
        <div className="topics-grid">
          <div className="topic-card">
            <div className="topic-icon">👨‍🏫</div>
            <h3>Expert Faculty</h3>
            <p>Learn from industry professionals and experienced educators with proven track records.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">🏢</div>
            <h3>Industry Partnerships</h3>
            <p>Collaborations with leading companies ensure practical exposure and placement opportunities.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">🔬</div>
            <h3>Modern Labs</h3>
            <p>State-of-the-art laboratories equipped with latest technology and equipment.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">📚</div>
            <h3>Rich Library</h3>
            <p>Extensive collection of books, journals, and digital resources for research.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta__content">
          <h2>Ready to Start Your Journey?</h2>
          <p>
            Get in touch with our admissions team to learn more about our
            programs, scholarships, and application process.
          </p>
          <a className="btn btn--primary" href="mailto:admissions@axiscolleges.org">
            Apply Now
          </a>
        </div>
      </section>
    </div>
  );
}
