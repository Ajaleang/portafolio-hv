export default function Skills() {
    return (
      <section className="bg-cafe-claro text-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-dorado text-center">Habilidades Técnicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
            {[
              { title: "Desarrollo Embebido", skills: ["C/C++", "ARM Cortex", "Microcontroladores", "RTOS"] },
              { title: "Control & Automatización", skills: ["PLC", "SCADA", "Sistemas de Control", "Modelado de Procesos"] },
              { title: "Backend", skills: ["Node.js", "Express", "SQL/NoSQL", "APIs REST"] },
              { title: "Frontend", skills: ["React", "TypeScript", "Tailwind CSS", "Vite"] },
              { title: "IoT", skills: ["ESP32", "Raspberry Pi", "MQTT", "Protocolos de Comunicación"] },
              { title: "Herramientas & Otros", skills: ["Git", "Linux", "Docker", "Jira", "VS Code"] },
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
  