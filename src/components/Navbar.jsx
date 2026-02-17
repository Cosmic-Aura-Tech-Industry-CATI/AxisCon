import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/conference", label: "Conference" },
  { path: "/about", label: "About AITM" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="nav">
      <Link className="nav__brand" to="/" aria-label="Axis Colleges" onClick={closeMenu}>
        <img src="/assets/brand/axis-logo.webp" alt="Axis Colleges" />
      </Link>
      <button
        className="nav__toggle"
        type="button"
        aria-label="Toggle navigation"
        onClick={() => setIsMenuOpen((value) => !value)}
      >
        <span className="nav__toggle-bar" />
        <span className="nav__toggle-bar" />
      </button>
      <div className={`nav__links ${isMenuOpen ? "is-open" : ""}`}>
        <div className="nav__menu-logo" aria-hidden={!isMenuOpen}>
          <img src="/assets/brand/axis-logo.webp" alt="Axis Colleges" />
        </div>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`nav__link ${location.pathname === link.path ? "active" : ""}`}
            onClick={closeMenu}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
