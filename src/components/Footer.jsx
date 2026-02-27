import { Link } from "react-router-dom";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/conference", label: "Conference" },
  { path: "/schedule", label: "Schedule" },
  { path: "/committee", label: "Committee" },
  { path: "/theme", label: "Theme" },
  { path: "/contact", label: "Contact" },
];

// Split navigation links into two columns
const navLinksColumn1 = navLinks.slice(0, 4); // First 4 links
const navLinksColumn2 = navLinks.slice(4); // Remaining 3 links

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/axiscolleges",
    iconClass: "fa-brands fa-instagram",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/axiscolleges",
    iconClass: "fa-brands fa-facebook-f",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/axiscolleges",
    iconClass: "fa-brands fa-x-twitter",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/school/axis-colleges/posts/?feedView=all",
    iconClass: "fa-brands fa-linkedin-in",
  },
];

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        {/* Brand Section */}
        <div className="footer__brand">
          <div style={{marginBottom:"1.5rem"}}>
            <img src="/assets/brand/axis-logo.webp" alt="Axis Colleges Logo" width="100px" height="100px" />
          </div>
          <h2 className="footer__brand-title">ICCIST 2026</h2>
          <p className="footer__brand-description">
            International Conference on Computer Science, IT, and Intelligent Systems.
          </p>
        </div>

        {/* Navigation Links - Two Columns */}
        <div className="footer__nav">
          <h3 className="footer__nav-title">Quick Links</h3>
          <div className="footer__nav-grid">
            <div className="footer__nav-column">
              {navLinksColumn1.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="footer__nav-link"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="footer__nav-column">
              {navLinksColumn2.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="footer__nav-link"
                >
                  {link.label}
                </Link>
              ))}
              
            </div>
          </div>
        </div>

        {/* Social & Register Section */}
        <div className="footer__actions">
          <h3 className="footer__actions-title">Connect With Us</h3>
          <div className="footer__social">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                <i className={link.iconClass} aria-hidden="true" />
              </a>
            ))}
          </div>
          <a
            href="https://forms.gle/HBuUc1SGSomUrGra6"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__register-btn"
          >
            Register Now
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer__bottom">
        <p className="footer__copy">
          Copyright © 2026 ICCIST. All rights reserved.
          <br />
          <span className="kalesh-copyright">
            Developed by Team {" "}
            <a
              href="https://www.thekalesh.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="kalesh-copyright__link"
            >
              Kalesh
            </a>
            <img
              className="kalesh-copyright__logo"
              src="../../logo.png"
              alt="Kalesh Logo"
              width="20px"
              height="20px"
            />
          </span>
        </p>
        <button
          className="footer__scroll-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Back to top"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 19V5M5 12l7-7 7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </footer>
  );
}