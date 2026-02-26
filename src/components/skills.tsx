export default function Skills() {
    return (
      <section className="bg-cafe-claro text-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-dorado text-center">Habilidades Técnicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
            {[
              { title: "Integración & APIs", skills: ["APIs REST", "JSON", "SOAP / XML", "Microservicios", "Arquitectura Hexagonal", "DDD"] },
              { title: "Lenguajes", skills: ["Node.js (TypeScript)", "Python", "Scala", "Java"] },
              { title: "Cloud & DevOps", skills: ["AWS", "Azure DevOps", "CI/CD", "Terraform", "CloudFormation"] },
              { title: "Bases de Datos", skills: ["PostgreSQL", "MySQL", "MongoDB", "Optimización SQL"] },
              { title: "Mensajería & Async", skills: ["RabbitMQ", "Pub/Sub", "Colas de mensajes", "Idempotencia"] },
              { title: "Seguridad & Herramientas", skills: ["JWT", "OWASP (APIs)", "Docker", "Git / GitHub", "SCRUM"] },
            ].map(({ title, skills }) => (
              <div key={title} className="bg-cafe p-6 rounded-lg shadow-md border border-dorado">
                <h3 className="text-2xl font-semibold mb-4 text-dorado">{title}</h3>
                <ul className="space-y-2">
                  {skills.map((skill) => (
                    <li key={skill} className="text-white text-base">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  