import { Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import HeroBackground from './HeroBackground';

const Hero = () => {
  const basePath = import.meta.env.BASE_URL;

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center text-white px-4 pt-24 bg-cafe overflow-hidden">
      <HeroBackground />
      <div className="absolute inset-0 bg-cafe bg-opacity-40"></div>

      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          ¡Hola! Soy <span className="text-dorado">Armando Alean</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-300">
          Ingeniero Electrónico especializado en desarrollo backend, integración de APIs y despliegue en la nube.
          Transformo ideas en sistemas robustos, escalables y bien integrados.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/sobre-mi"
            className="bg-dorado text-cafe font-semibold py-3 px-8 rounded-full hover:bg-yellow-400 transition duration-300"
          >
            Conóceme
          </Link>
          <a
            href={`${basePath}CvAalean.pdf`}
            download="CV-Armando-Alean.pdf"
            className="flex items-center justify-center gap-2 border-2 border-dorado text-dorado font-semibold py-3 px-8 rounded-full hover:bg-dorado hover:text-cafe transition duration-300"
          >
            <FaDownload className="text-sm" />
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
