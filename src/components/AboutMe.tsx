export default function AboutMe() {
    return (
      <section className="bg-cafe text-white py-20 px-6 md:px-20" id="about">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
          <img
            src="/profile.jpg"
            alt="Armando Alean"
            className="w-64 h-64 rounded-xl object-cover shadow-2xl border-4 border-dorado"
          />
          <div>
            <h2 className="text-4xl font-bold mb-6 text-dorado">Sobre Mí</h2>
            <p className="text-lg leading-relaxed text-justify mb-4">
              Soy <strong>Armando Alean</strong>, Ingeniero Electrónico e Ingeniero de Control. Apasionado por la tecnología, me dedico a crear soluciones que combinan eficiencia, innovación y sostenibilidad. 
              Me especializo en el desarrollo de sistemas embebidos, automatización industrial, IoT y backend, con una visión integral y estratégica.
            </p>
            <p className="text-lg leading-relaxed text-justify mb-4">
              A lo largo de mi trayectoria, he liderado y colaborado en proyectos donde la tecnología mejora la productividad, la toma de decisiones y la conectividad de los sistemas. Siempre busco mantenerme actualizado y aplicar buenas prácticas en cada etapa del desarrollo.
            </p>
            <p className="text-lg leading-relaxed text-justify">
              Fuera del ámbito técnico, disfruto colaborar con equipos multidisciplinarios, participar en iniciativas educativas y fomentar el crecimiento profesional de la comunidad tecnológica.
            </p>
          </div>
        </div>
      </section>
    );
  }
  