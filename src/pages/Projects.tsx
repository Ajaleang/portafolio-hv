import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  category: 'Fullstack' | 'Backend' | 'Integración';
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const categoryIcons: Record<string, string> = {
  Fullstack: '🖥️',
  Backend: '⚙️',
  Integración: '🔗',
};

const projects: Project[] = [
  {
    id: 1,
    title: "Quanticon Valley — Plataforma Educativa Gamificada",
    description: "Plataforma educativa gamificada desarrollada para la Universidad Nacional de Colombia. Incluye gestión de usuarios, seguimiento de métricas académicas e integración cliente-servidor mediante APIs REST.",
    category: "Fullstack",
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "APIs REST"],
  },
  {
    id: 2,
    title: "Infraestructura Serverless en AWS",
    description: "Diseño y despliegue de servicios backend serverless para procesamiento de datos y exposición de APIs. Infraestructura reproducible definida como código con Terraform y CloudFormation.",
    category: "Backend",
    technologies: ["Node.js", "Python", "AWS Lambda", "API Gateway", "Terraform", "CloudFormation"],
  },
  {
    id: 3,
    title: "Integración de Servicios Backend Corporativos",
    description: "Desarrollo e integración de servicios backend en entorno empresarial regulado bajo Arquitectura Hexagonal y DDD. Incluye comunicación asíncrona con RabbitMQ, pipelines CI/CD y migración tecnológica Scala → Java.",
    category: "Integración",
    technologies: ["Node.js", "Scala", "RabbitMQ", "PostgreSQL", "Azure DevOps", "Docker"],
  }
];

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Fullstack', 'Backend', 'Integración'];

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
              <div className="h-28 bg-gradient-to-br from-cafe to-cafe-claro flex items-center justify-center relative">
                <span className="text-5xl">{categoryIcons[project.category]}</span>
                <div className="absolute top-0 right-0 m-3 bg-dorado text-cafe px-3 py-1 rounded-full text-sm font-semibold">
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