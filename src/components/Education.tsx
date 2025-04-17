const Education = () => {
    return (
      <section className="bg-cafe text-white py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-dorado mb-12 text-center">Mi Formación Académica</h2>
  
          <div className="relative border-l-4 border-dorado pl-6 space-y-10">
  
            {/* Pregrado */}
            <div className="relative">
              <div className="absolute w-4 h-4 bg-dorado rounded-full -left-5 top-1.5"></div>
              <h3 className="text-2xl font-semibold">Ingeniería Electrónica</h3>
              <p className="text-dorado text-sm">Universidad Nacional de Colombia — 2020 - 2025</p>
              <p className="mt-2 text-justify">
                Formación en diseño de circuitos, sistemas embebidos, automatización industrial, telecomunicaciones y más.
                Participé en semilleros de investigación y diversos proyectos de innovación tecnológica.
              </p>
            </div>  
            {/* Cursos */}
            <div className="relative">
              <div className="absolute w-4 h-4 bg-dorado rounded-full -left-5 top-1.5"></div>
              <h3 className="text-2xl font-semibold">Certificaciones y Cursos</h3>
              <p className="text-dorado text-sm">En línea — Diversas plataformas</p>
              <ul className="list-disc pl-5 mt-2 space-y-2 text-justify">
                <li>Full Stack Web Development – FreeCodeCamp / Platzi</li>
                <li>Diplomado en desarrollo web – MisionTic 2002 / Universidad Nacional de Colombia</li>
                <li>Desarrollo Backend con Node.js – Udemy</li>
                <li>IoT con ESP32, MQTT y Node-RED – Edutin / Coursera</li>
                <li>Control de sistemas dinámicos – MATLAB & Simulink (MathWorks)</li>
              </ul>
            </div>
  
          </div>
        </div>
      </section>
    );
  };
  
  export default Education;
  