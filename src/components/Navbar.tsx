import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-cafe-claro shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-extrabold text-dorado tracking-wide">
            Armando Alean
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link to="/" onClick={closeMenu} className="hover:text-dorado transition duration-300 font-medium">
              Inicio
            </Link>
            <Link to="/sobre-mi" onClick={closeMenu} className="hover:text-dorado transition duration-300 font-medium">
              Sobre Mí
            </Link>
            <Link to="/contact" onClick={closeMenu} className="hover:text-dorado transition duration-300 font-medium">
              Contacto
            </Link>
            <Link to="/proyectos" onClick={closeMenu} className="hover:text-dorado transition duration-300 font-medium">
              Proyectos
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
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
        <div className="md:hidden bg-cafe-claro text-white px-4 pb-4 pt-2 space-y-2 transition-all duration-300">
          <Link to="/" onClick={closeMenu} className="block hover:text-dorado font-medium">Inicio</Link>
          <Link to="/sobre-mi" onClick={closeMenu} className="block hover:text-dorado font-medium">Sobre Mí</Link>
          <Link to="/contact" onClick={closeMenu} className="block hover:text-dorado font-medium">Contacto</Link>
          <Link to="/proyectos" onClick={closeMenu} className="block hover:text-dorado font-medium">Proyectos</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
