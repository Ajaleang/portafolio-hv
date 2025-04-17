import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  category: 'IoT' | 'Backend' | 'Sistemas Inteligentes';
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de Monitoreo Ambiental IoT",
    description: "Sistema en tiempo real para monitoreo de variables ambientales utilizando sensores conectados a la nube. Implementa análisis de datos y alertas automáticas.",
    category: "IoT",
    technologies: ["ESP32", "MQTT", "Node.js", "MongoDB", "React"],
    image: "/images/environment-monitoring.jpg",
    githubUrl: "https://github.com/username/environmental-monitoring"
  },
  {
    id: 2,
    title: "API REST para Gestión de Dispositivos",
    description: "Backend robusto para administración de dispositivos IoT, incluyendo autenticación, autorización y logging de eventos.",
    category: "Backend",
    technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "Docker"],
    image: "/images/api-management.jpg",
    githubUrl: "https://github.com/username/device-management-api"
  },
  {
    id: 3,
    title: "Sistema de Control Inteligente",
    description: "Implementación de algoritmos de control adaptativo y machine learning para optimización de procesos industriales.",
    category: "Sistemas Inteligentes",
    technologies: ["Python", "TensorFlow", "Scikit-learn", "Flask", "React"],
    image: "/images/smart-control.jpg",
    githubUrl: "https://github.com/username/smart-control-system"
  }
];

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'IoT', 'Backend', 'Sistemas Inteligentes'];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-cafe py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-dorado text-center mb-8">
          Mis Proyectos
        </h1>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${selectedCategory === category
                ? 'bg-dorado text-cafe font-bold'
                : 'bg-cafe-claro text-white hover:bg-dorado hover:text-cafe'}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-cafe-claro rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 right-0 m-4 bg-dorado text-cafe px-3 py-1 rounded-full text-sm font-semibold">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-dorado mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-dorado font-semibold mb-2">Tecnologías:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-cafe px-3 py-1 rounded-full text-sm text-dorado"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-dorado transition-colors duration-300"
                    >
                      <FaGithub className="text-xl" />
                      <span>Código</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-dorado transition-colors duration-300"
                    >
                      <FaExternalLinkAlt className="text-xl" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;