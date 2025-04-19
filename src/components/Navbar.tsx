import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-gradient-to-r from-brown-800 via-brown-350 to-brown-200 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center text-2xl font-extrabold text-dorado tracking-wide">
            Armando Alean
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link to="/" onClick={closeMenu} className="hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 font-medium">
              Inicio
            </Link>
            <Link to="/sobre-mi" onClick={closeMenu} className="hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 font-medium">
              Sobre Mí
            </Link>
            <Link to="/contact" onClick={closeMenu} className="hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 font-medium">
              Contacto
            </Link>
            <Link to="/servicios" onClick={closeMenu} className="hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 font-medium">
              Servicios
            </Link>
            <Link to="/proyectos" onClick={closeMenu} className="hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 font-medium">
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
        <div className="md:hidden bg-gradient-to-r from-brown-800 via-brown-600 to-brown-400 text-white px-4 pb-4 pt-2 space-y-2 transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <Link to="/" onClick={closeMenu} className="block hover:text-white font-medium">Inicio</Link>
          <Link to="/sobre-mi" onClick={closeMenu} className="block hover:text-white font-medium">Sobre Mí</Link>
          <Link to="/contact" onClick={closeMenu} className="block hover:text-white font-medium">Contacto</Link>
          <Link to="/servicios" onClick={closeMenu} className="block hover:text-white font-medium">Servicios</Link>
          <Link to="/proyectos" onClick={closeMenu} className="block hover:text-white font-medium">Proyectos</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
