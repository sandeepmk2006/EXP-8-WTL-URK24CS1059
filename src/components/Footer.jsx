import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p>🔬 Science Fair Project Showcase</p>
      <p className="footer-small">
        © {new Date().getFullYear()} Science Fair Committee. Curiosity wins.
      </p>
    </footer>
  );
}

export default Footer;
