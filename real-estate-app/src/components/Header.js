import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      
      {/* LOGO SECTION */}
      <div className="logo-section">
        <Link
          to="/"
          className="logo"
          onClick={() => setMenuOpen(false)}
        >
          <div className="logo-circle">🏠</div>
          <span>RealEstatePro</span>
        </Link>
      </div>

      {/* HAMBURGER ICON */}
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* NAVIGATION */}
      <nav className={menuOpen ? "nav active" : "nav"}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/listings" onClick={() => setMenuOpen(false)}>Properties</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </nav>

    </header>
  );
};

export default Header;
