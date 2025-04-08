import { FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-cafe text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-2">Armando Alean</h3>
          <p>
            Ingeniero electrónico apasionado por el desarrollo backend,
            el diseño de sistemas inteligentes e IoT.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Enlaces rápidos</h4>
          <ul className="space-y-1">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/sobre-mi">Sobre Mí</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/proyectos">Proyectos</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Contacto</h4>
          <p>Email: <a href="mailto:ajaleang@gmail.com" className="text-dorado">ajaleang@gmail.com</a></p>
          <p>Ubicación: Bogotá, Colombia</p>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-2">Sígueme</h4>
          <div className="flex space-x-4 text-2xl">
            <a href="https://github.com/Ajaleang" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/ajaleang" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Suscríbete</h4>
          <form className="flex items-center border border-gray-500 rounded overflow-hidden">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="bg-transparent px-3 py-2 text-white focus:outline-none"
              required
            />
            <button type="submit" className="bg-dorado text-cafe px-3 py-2">
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-8">
        &copy; 2025 Armando Alean. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
