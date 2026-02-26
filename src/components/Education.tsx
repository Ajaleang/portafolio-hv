const Education = () => {
    return (
      <section className="bg-cafe text-white py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-dorado mb-12 text-center">Mi Formación Académica</h2>
  
          <div className="relative border-l-4 border-dorado pl-6 space-y-10">

            <div className="relative">
              <div className="absolute w-4 h-4 bg-dorado rounded-full -left-5 top-1.5"></div>
              <h3 className="text-2xl font-semibold">Ingeniería Electrónica</h3>
              <p className="text-dorado text-sm">Universidad Nacional de Colombia — 2020 – 2025</p>
              <p className="mt-2 text-justify">
                Formación integral en diseño de circuitos, sistemas embebidos, automatización, telecomunicaciones y software. 
                Finalización académica en 2025 — Grado previsto: Abril 2026.
              </p>
            </div>

            <div className="relative">
              <div className="absolute w-4 h-4 bg-dorado rounded-full -left-5 top-1.5"></div>
              <h3 className="text-2xl font-semibold">Cisco CyberOps Associate</h3>
              <p className="text-dorado text-sm">Cisco — 2025</p>
              <p className="mt-2 text-justify">
                Certificación en operaciones de ciberseguridad: análisis de amenazas, monitoreo de redes y respuesta a incidentes.
              </p>
            </div>

            <div className="relative">
              <div className="absolute w-4 h-4 bg-dorado rounded-full -left-5 top-1.5"></div>
              <h3 className="text-2xl font-semibold">Cisco Certified Network Associate (CCNA)</h3>
              <p className="text-dorado text-sm">Cisco — 2024</p>
              <p className="mt-2 text-justify">
                Certificación en redes: enrutamiento, switching, protocolos IP y fundamentos de redes empresariales.
              </p>
            </div>

            <div className="relative">
              <div className="absolute w-4 h-4 bg-dorado rounded-full -left-5 top-1.5"></div>
              <h3 className="text-2xl font-semibold">Diplomado en Desarrollo Web Fullstack</h3>
              <p className="text-dorado text-sm">Programa Misión TIC — Universidad Nacional de Colombia — 2021</p>
              <p className="mt-2 text-justify">
                Formación intensiva en desarrollo web frontend y backend, con enfoque en tecnologías modernas y buenas prácticas de ingeniería de software.
              </p>
            </div>

          </div>
        </div>
      </section>
    );
  };
  
  export default Education;
  