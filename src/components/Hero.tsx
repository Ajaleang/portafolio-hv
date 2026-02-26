import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center text-white px-4 pt-24 bg-cafe overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-cafe via-cafe-claro to-cafe opacity-90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.15),_transparent_60%)]"></div>

      {/* Contenido centrado */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          ¡Hola! Soy <span className="text-dorado">Armando Alean</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-300">
          Ingeniero Electrónico apasionado por crear soluciones inteligentes y sostenibles.
          ¿Listo para llevar tu proyecto al siguiente nivel?
        </p>
        <Link
          to="/sobre-mi"
          className="bg-dorado text-cafe font-semibold py-3 px-8 rounded-full hover:bg-yellow-400 transition duration-300"
        >
          Conóceme
        </Link>
      </div>
    </section>
  );
};

export default Hero;
