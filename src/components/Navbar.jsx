import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/schedule", label: "Schedule" },
  { path: "/committee", label: "Committee" },
  { path: "/theme", label: "Theme" },
  { path: "/conference", label: "Conference" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  // Toggle body scroll when menu opens/closes
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <nav className="nav">
      <div className="nav__container">
        {/* Logo - Left Section */}
        <Link className="nav__brand" to="/" aria-label="Axis Colleges" onClick={closeMenu}>
          <img src="/assets/brand/axis-logo.webp" alt="Axis Colleges" />
        </Link>

        {/* Mobile Toggle */}
        <button
          className={`nav__toggle ${isMenuOpen ? "is-active" : ""}`}
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
        </button>

        {/* Navigation Links - Center Section */}
        <div className={`nav__links ${isMenuOpen ? "is-open" : ""}`}>
          <div className="nav__menu-logo" aria-hidden={!isMenuOpen}>
            <img src="/assets/brand/axis-logo.webp" alt="Axis Colleges" />
          </div>
          
          <div className="nav__links-center">
            {navLinks.map((link) => (
              link.label === "Conference" ? (
                <div key={link.path} className="nav__link-dropdown" ref={dropdownRef}>
                  <Link
                    to={link.path}
                    className={`nav__link ${location.pathname === link.path ? "active" : ""}`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                  <button
                    className="nav__link--research-paper"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown();
                    }}
                    aria-label="Toggle research paper dropdown"
                  >
                    Research Paper <span className="nav__dropdown-arrow">▼</span>
                  </button>
                  <div className={`nav__dropdown ${isDropdownOpen ? "is-open" : ""}`}>
                    <a href="#download-paper" className="nav__dropdown-item" onClick={closeMenu}>
                      Download Research Paper Format
                    </a>
                    <a href="#submit-paper" className="nav__dropdown-item" onClick={closeMenu}>
                      Submit Research Paper
                    </a>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav__link ${location.pathname === link.path ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              )
            ))}
            
            {/* Register Button - Inside Mobile Menu */}
            <Link
              to="/register"
              className={`nav__link nav__register-button-mobile ${location.pathname === "/register" ? "active" : ""}`}
              onClick={closeMenu}
            >
              <span className="nav__register-text">Register Now</span>
            </Link>
          </div>
        </div>

        {/* Register Button - Desktop Only */}
        <div className="nav__register-wrapper">
          <Link
            to="/register"
            className="nav__register-button"
            onClick={closeMenu}
          >
            <span className="nav__register-text">Register Now</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}