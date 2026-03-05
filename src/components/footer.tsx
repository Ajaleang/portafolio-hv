import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-cafe py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
          <h3 className="text-xl font-bold mb-2 text-dorado">Armando Alean</h3>
          <p className="text-sm leading-relaxed">
            Ingeniero Electrónico especializado en desarrollo backend,
            integración de APIs y despliegue cloud.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3 text-dorado">Navegación</h4>
          <ul className="space-y-1.5 text-sm">
            <li><Link to="/" className="hover:text-dorado transition">Inicio</Link></li>
            <li><Link to="/sobre-mi" className="hover:text-dorado transition">Sobre Mí</Link></li>
            <li><Link to="/servicios" className="hover:text-dorado transition">Servicios</Link></li>
            <li><Link to="/proyectos" className="hover:text-dorado transition">Proyectos</Link></li>
            <li><Link to="/contact" className="hover:text-dorado transition">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3 text-dorado">Contacto</h4>
          <ul className="space-y-1.5 text-sm">
            <li>
              <a href="mailto:ajaleang@unal.edu.co" className="hover:text-dorado transition">
                ajaleang@unal.edu.co
              </a>
            </li>
            <li>Bogotá, Colombia</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3 text-dorado">Redes</h4>
          <div className="flex gap-5 text-2xl">
            <a
              href="https://github.com/Ajaleang"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-dorado transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ajaleang"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-dorado transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/573059152346"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="hover:text-dorado transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

      </div>

      <div className="text-center text-sm text-gray-400 mt-8 border-t border-dorado border-opacity-10 pt-6">
        &copy; 2026 Armando Alean. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
