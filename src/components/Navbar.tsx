import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between px-6 py-4 bg-cafe-claro">
      <Link to="/" className="font-bold text-xl">Armando Alean</Link>
      <div className="flex gap-4">
        <Link to="/" className="hover:text-dorado transition">Inicio</Link>
        <Link to="/sobre-mi" className="hover:text-dorado transition">Sobre Mí</Link>
        <Link to="/contact" className="hover:text-dorado transition">Contacto </Link>
        <Link to="/proyectos" className="hover:text-dorado transition">Proyectos</Link>
      </div>
    </nav>
  );
};

export default Navbar;
