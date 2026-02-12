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

const featuredCourses = [
  {
    title: "B-Tech",
    subtitle: "Engineering Program",
    image: "/assets/courses/btech.jpg",
  },
  {
    title: "MBA",
    subtitle: "Business Administration",
    image: "/assets/courses/mba.jpg",
  },
  {
    title: "B-Pharma",
    subtitle: "Pharmacy Program",
    image: "/assets/courses/bpharma.jpg",
  },
  {
    title: "MCA",
    subtitle: "Master Degree Program",
    image: "/assets/courses/mca.webp",
  },
];

const facilities = [
  {
    title: "Libraries",
    description:
      "The knowledge resource center curates, safeguards, and circulates the most recent academic materials.",
    image: "/assets/facilities/library.jpg",
  },
  {
    title: "Laboratories",
    description:
      "Hands-on workshops and labs staffed by experts to turn theory into immersive, practical learning.",
    image: "/assets/facilities/labs.jpg",
  },
  {
    title: "Cafeteria & Canteen",
    description:
      "Nutritious, wholesome menus designed for a campus culture that values healthy minds and bodies.",
    image: "/assets/facilities/canteen.jpg",
  },
];

const testimonials = [
  {
    name: "Divyanshi Singh",
    rating: 4,
    image: "/assets/people/student-1.png",
    quote:
      "I'm a B Pharm 3rd year student at Axis Colleges. We have opportunities to participate in health camps, hospital visits, and more.",
  },
  {
    name: "Amit Mishra",
    rating: 4.5,
    image: "/assets/people/student-2.png",
    quote:
      "Axis Colleges gives the freedom to choose exciting projects and collaborate with inspiring faculty and peers.",
  },
];

const starArray = (rating) => {
  const full = Math.floor(rating);
  const half = rating % 1 !== 0;
  return Array.from({ length: 5 }, (_, index) => {
    if (index < full) return "full";
    if (index === full && half) return "half";
    return "empty";
  });
};

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="hero__content">
          <div className="hero__text">
            <p className="hero__tag">Future-Ready Campus</p>
            <h1>
              Axis Colleges <span>Igniting Ideas, Engineering Futures.</span>
            </h1>
            <p className="hero__lead">
              A chain of engineering, medical, and professional colleges where
              young minds collaborate, research, and shape the next wave of
              innovation.
            </p>
            <div className="hero__actions">
              <Link className="btn btn--primary" to="/courses">
                Explore Programs
              </Link>
              <Link className="btn btn--secondary" to="/contact">
                Schedule a Visit
              </Link>
            </div>
          </div>
          <div className="hero__panel">
            <div className="hero__stat">
              <p className="hero__stat-value">20+</p>
              <p className="hero__stat-label">Programs Across Disciplines</p>
            </div>
            <div className="hero__stat">
              <p className="hero__stat-value">12k</p>
              <p className="hero__stat-label">Active Students</p>
            </div>
            <div className="hero__stat">
              <p className="hero__stat-value">85%</p>
              <p className="hero__stat-label">Placement Success</p>
            </div>
          </div>
        </div>
      </header>

      <section className="section recognition">
        <div className="section__heading">
          <p className="eyebrow">Accreditation</p>
          <h2>Approved & Recognized By</h2>
        </div>
        <div className="recognition__logos">
          {recognitionLogos.map((logo) => (
            <div key={logo} className="recognition__card">
              <img src={logo} alt="Recognition logo" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__heading">
          <p className="eyebrow">Programs</p>
          <h2>Featured Courses</h2>
          <p className="section__subtitle">
            Curated pathways for engineering, design, management, and life
            sciences.
          </p>
        </div>
        <div className="courses__grid">
          {featuredCourses.map((course) => (
            <article key={course.title} className="course-card">
              <div className="course-card__image">
                <img src={course.image} alt={course.title} loading="lazy" />
              </div>
              <div className="course-card__body">
                <h3>{course.title}</h3>
                <p>{course.subtitle}</p>
                <Link className="course-card__link" to="/courses">
                  View All Programs
                </Link>
              </div>
            </article>
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
              Guiding a culture of academic rigor, entrepreneurial spirit, and
              community-first innovation across every campus.
            </p>
            <Link className="btn btn--ghost" to="/about">
              Meet the Leadership
            </Link>
          </div>
          <div className="spotlight__image">
            <img src="/assets/people/rajsir.webp" alt="Chairman" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section facilities">
        <div className="section__heading">
          <p className="eyebrow">Facilities</p>
          <h2>Designed For Discovery</h2>
          <p className="section__subtitle">
            Inspiring spaces, advanced infrastructure, and student-first
            amenities.
          </p>
        </div>
        <div className="facilities__grid">
          {facilities.map((facility) => (
            <article key={facility.title} className="facility-card">
              <img src={facility.image} alt={facility.title} loading="lazy" />
              <div>
                <h3>{facility.title}</h3>
                <p>{facility.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section testimonials">
        <div className="section__heading">
          <p className="eyebrow">Testimonials</p>
          <h2>What Our Students Say</h2>
        </div>
        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="testimonial-card">
              <img src={testimonial.image} alt={testimonial.name} loading="lazy" />
              <div>
                <div className="testimonial-card__stars">
                  {starArray(testimonial.rating).map((star, index) => (
                    <span key={`${testimonial.name}-${index}`}>
                      {star === "full" && "★"}
                      {star === "half" && "⯪"}
                      {star === "empty" && "☆"}
                    </span>
                  ))}
                </div>
                <h3>{testimonial.name}</h3>
                <p>{testimonial.quote}</p>
              </div>
            </article>
          ))}
        </div>
        <a
          className="btn btn--ghost"
          href="https://www.google.com/maps/place/Axis+Colleges/@26.3448626,80.4505286,17z/data=!4m8!3m7!1s0x399c4278f92f3a69:0xb7805a7e15877959!8m2!3d26.3448578!4d80.4527173!9m1!1b1!16s%2Fg%2F1hc0zq865?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: "var(--spacing-md)", display: "inline-flex" }}
        >
          View All Reviews
        </a>
      </section>

      <section className="cta">
        <div className="cta__content">
          <h2>Enroll For Our Various Courses</h2>
          <p>
            Connect with admissions to explore the right program, scholarships,
            and campus life.
          </p>
          <a className="btn btn--primary" href="mailto:info@axiscolleges.org">
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
