import { Link, useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

function Navbar({ darkMode, setDarkMode }) {
  const location = useLocation();

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const isActive = (path) =>
    location.pathname === path
      ? "text-blue-500 dark:text-blue-400"
      : "hover:text-blue-500 dark:hover:text-blue-400";

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          Ismael Sierra
        </Link>
        <nav className="space-x-6">
          <Link to="/" className={`transition ${isActive("/")}`}>
            Inicio
          </Link>
          <Link to="/about" className={`transition ${isActive("/about")}`}>
            Sobre mí
          </Link>
          <Link
            to="/projects"
            className={`transition ${isActive("/projects")}`}
          >
            Proyectos
          </Link>
          <Link to="/contact" className={`transition ${isActive("/contact")}`}>
            Contacto
          </Link>
        </nav>
        <button
          onClick={toggleDarkMode}
          className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
