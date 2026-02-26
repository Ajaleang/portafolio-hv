const experiences = [
  {
    role: 'Analista de Desarrollo — Práctica Profesional',
    company: 'SURA Colombia',
    period: 'Mar 2025 — Actual',
    current: true,
    bullets: [
      'Desarrollo e integración de servicios backend en Node.js y Scala bajo Arquitectura Hexagonal y DDD en entorno empresarial regulado.',
      'Implementación e integración de APIs REST entre sistemas corporativos: definición de contratos, validación de payloads JSON y soporte a pruebas de integración.',
      'Participación en migración tecnológica de servicios (Scala → Java), asegurando consistencia funcional y del modelo de dominio.',
      'Implementación y configuración de RabbitMQ para comunicación asíncrona entre servicios, gestionando colas y patrones pub/sub.',
      'Automatización de despliegues mediante pipelines CI/CD en Azure DevOps, incorporando controles de calidad y estandarización de entregas.',
      'Supervisión técnica de aplicación crítica de negocio: seguimiento operativo, validación de reglas y apoyo en gestión de incidencias.',
      'Documentación técnica y coordinación con equipos multidisciplinarios bajo metodología SCRUM.',
    ],
    tags: ['Node.js', 'Scala', 'APIs REST', 'RabbitMQ', 'Azure DevOps', 'CI/CD', 'SQL', 'Docker'],
  },
  {
    role: 'Desarrollador Fullstack — Proyecto Quanticon Valley',
    company: 'Universidad Nacional de Colombia',
    period: 'Feb 2025 — Jul 2025',
    current: false,
    bullets: [
      'Desarrollo fullstack de plataforma educativa gamificada con funcionalidades de gestión de usuarios y métricas académicas.',
      'Diseño y consumo de APIs REST para integración cliente-servidor y modelado de datos relacional.',
    ],
    tags: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'APIs REST'],
  },
  {
    role: 'Desarrollador Backend Freelance',
    company: 'Remoto',
    period: 'Feb 2023 — Feb 2025',
    current: false,
    bullets: [
      'Desarrollo de APIs REST en Node.js y Python, orientadas a integración y procesamiento eficiente de datos.',
      'Modelado y administración de bases de datos MySQL y PostgreSQL; optimización de consultas SQL.',
      'Implementación de componentes serverless en AWS (Lambda + API Gateway) para exposición de servicios y procesamiento de eventos.',
      'Despliegue de infraestructura como código mediante Terraform y CloudFormation, garantizando entornos reproducibles.',
    ],
    tags: ['Node.js', 'Python', 'AWS Lambda', 'PostgreSQL', 'MySQL', 'Terraform', 'CloudFormation'],
  },
];

const Experience = () => {
  return (
    <section className="bg-cafe-claro text-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-dorado mb-12 text-center">Experiencia Profesional</h2>

        <div className="relative border-l-4 border-dorado pl-6 space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="relative">
              {/* Timeline dot */}
              <div className={`absolute w-4 h-4 rounded-full -left-[34px] top-1.5 border-2 border-dorado ${exp.current ? 'bg-dorado' : 'bg-cafe'}`} />

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <span className="text-dorado text-sm font-medium whitespace-nowrap">{exp.period}</span>
              </div>
              <p className="text-dorado text-sm mb-3 italic">
                {exp.company}
                {exp.current && (
                  <span className="ml-2 bg-dorado text-cafe text-xs font-bold px-2 py-0.5 rounded-full not-italic">
                    Actual
                  </span>
                )}
              </p>

              {/* Bullets */}
              <ul className="space-y-1.5 mb-4">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2 text-sm text-gray-300 leading-relaxed">
                    <span className="text-dorado mt-1 shrink-0">▸</span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span key={tag} className="bg-cafe text-dorado text-xs px-3 py-1 rounded-full border border-dorado border-opacity-30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
