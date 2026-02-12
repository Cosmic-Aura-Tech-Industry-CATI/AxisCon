const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/axiscolleges", icon: "IG" },
  { label: "Facebook", href: "https://facebook.com/axiscolleges", icon: "FB" },
  { label: "Twitter", href: "https://twitter.com/axiscolleges", icon: "TW" },
  { label: "YouTube", href: "https://youtube.com/@axiscolleges", icon: "YT" },
  { label: "LinkedIn", href: "https://linkedin.com/company/axiscolleges", icon: "IN" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <h2>Axis Colleges</h2>
        <p>Building a future-ready learning ecosystem since 2013.</p>
      </div>
      <div className="footer__links">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            aria-label={link.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <p className="footer__copy">
        Copyright © 2024 Axis Colleges. All rights reserved.
      </p>
    </footer>
  );
}
