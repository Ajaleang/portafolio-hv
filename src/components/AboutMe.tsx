export default function AboutMe() {
    const basePath = import.meta.env.BASE_URL;

    return (
      <section className="bg-cafe text-white py-20 px-6 md:px-20" id="about">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
          <img
            src={`${basePath}profile.jpg`}
            alt="Armando Alean"
            className="w-64 h-64 rounded-xl object-cover shadow-2xl border-4 border-dorado"
          />
          <div>
            <h2 className="text-4xl font-bold mb-6 text-dorado">Sobre Mí</h2>
            <p className="text-lg leading-relaxed text-justify mb-4">
              Soy <strong>Armando Alean</strong>, Ingeniero Electrónico con experiencia en desarrollo fullstack e integración de sistemas en entornos corporativos. Me especializo en diseño e implementación de <strong>APIs REST</strong>, modelado de bases de datos relacionales y automatización de despliegues mediante <strong>CI/CD</strong>.
            </p>
            <p className="text-lg leading-relaxed text-justify mb-4">
              Cuento con experiencia en entornos cloud (<strong>AWS</strong>), infraestructura como código (Terraform / CloudFormation) y contenedores (<strong>Docker</strong>), habiendo participado en soporte operativo, gestión de incidencias y aplicación de buenas prácticas de seguridad en el ciclo de vida del software.
            </p>
            <p className="text-lg leading-relaxed text-justify">
              Actualmente me desempeño como <strong>Analista de Desarrollo en SURA Colombia</strong>, trabajando con Node.js y Scala bajo principios de Arquitectura Hexagonal y DDD. Disfruto colaborar con equipos multidisciplinarios y resolver problemas complejos de integración en entornos empresariales regulados.
            </p>
          </div>
        </div>
      </section>
    );
  }
  