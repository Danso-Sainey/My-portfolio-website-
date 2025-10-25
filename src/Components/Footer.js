import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function Footer() {
  const { theme } = useContext(ThemeContext);

  const isDark = theme === "dark";

  const footerStyle = {
    background: isDark ? "var(--sidebar-bg)" : "var(--sidebar-bg)",
    color: "var(--text)",
    textAlign: "center",
    padding: "20px 0",
    marginTop: "60px",
    borderTop: "1px solid var(--border)",
    transition: "background 0.3s ease, color 0.3s ease, border-color 0.3s ease",
  };

  return (
    <footer style={footerStyle}>
      <p>© {new Date().getFullYear()} Sainey DANSO | All rights reserved.</p>
    </footer>
  );
}

export default Footer;
