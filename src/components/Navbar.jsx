import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import "./Navbar.css";

function Navbar({ darkMode, setDarkMode }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          Ismael Sierra Vega
        </Link>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" className={isActive("/")} onClick={closeMenu}>
            Inicio
          </Link>
          <Link to="/about" className={isActive("/about")} onClick={closeMenu}>
            Sobre mí
          </Link>
          <Link
            to="/projects"
            className={isActive("/projects")}
            onClick={closeMenu}
          >
            Proyectos
          </Link>
          <Link
            to="/contact"
            className={isActive("/contact")}
            onClick={closeMenu}
          >
            Contacto
          </Link>
        </nav>

        <div className="navbar-actions">
          <button
            onClick={toggleDarkMode}
            className="theme-toggle"
            aria-label="Modo oscuro"
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>
          <button
            onClick={toggleMenu}
            className="menu-toggle"
            aria-label="Menú móvil"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
