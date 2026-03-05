import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const links = [
  { to: '/',          label: 'Inicio'    },
  { to: '/sobre-mi',  label: 'Sobre Mí'  },
  { to: '/servicios', label: 'Servicios' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/contact',   label: 'Contacto'  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();

  const closeMenu = () => setIsOpen(false);

  const linkClass = (to: string) =>
    `font-medium transition duration-300 ${
      pathname === to
        ? 'text-dorado font-semibold underline underline-offset-4 decoration-dorado'
        : 'hover:text-dorado'
    }`;

  return (
    <nav className="bg-cafe-claro shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="text-2xl font-extrabold text-dorado tracking-wide">
            Armando Alean
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ to, label }) => (
              <Link key={to} to={to} onClick={closeMenu} className={linkClass(to)}>
                {label}
              </Link>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Cambiar tema"
              className="text-dorado hover:text-yellow-400 transition duration-300 text-lg"
            >
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
          </div>

          {/* Mobile buttons */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              aria-label="Cambiar tema"
              className="text-dorado text-lg"
            >
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              className="text-dorado focus:outline-none text-2xl"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cafe-claro px-4 pb-4 pt-2 space-y-3 border-t border-dorado border-opacity-20">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={closeMenu}
              className={`block ${linkClass(to)}`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
