
const Hero = () => {
    const basePath = import.meta.env.BASE_URL;

    return (
      <section
        className="relative min-h-screen flex flex-col justify-center items-center text-center text-white px-4 pt-24 bg-cover bg-center"
        style={{ backgroundImage: `url('${basePath}hero-bg.jpg')` }}
      >
        {/* Overlay para oscurecer y hacer más legible el texto */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
  
        {/* Contenido centrado */}
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-6">
            ¡Hola! Soy <span className="text-dorado">Armando Alean</span>
          </h1>
          <p className="text-xl max-w-2xl mb-6">
            Ingeniero Electrónico apasionado por crear soluciones inteligentes y sostenibles.
            ¿Listo para llevar tu proyecto al siguiente nivel?
          </p>
          <a
            href="/sobre-mi"
            className="bg-dorado text-cafe font-semibold py-2 px-6 rounded-full hover:bg-yellow-400 transition"
          >
            Conóceme
          </a>
        </div>
      </section>
    );
  };
  
  export default Hero;
  