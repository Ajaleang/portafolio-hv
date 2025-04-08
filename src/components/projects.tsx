import React from "react";

const projects = [
    {
        title: "Sistema de Monitoreo Ambiental",
        description:
            "Un sistema basado en microcontroladores para medir temperatura, humedad y calidad del aire en tiempo real, con conectividad IoT.",
        image: "/images/environment-monitoring.jpg",
    },
    {
        title: "Controlador de Iluminación Inteligente",
        description:
            "Proyecto que utiliza microcontroladores para ajustar automáticamente la iluminación según las condiciones ambientales.",
        image: "/images/smart-lighting.jpg",
    },
    {
        title: "Brazo Robótico Automatizado",
        description:
            "Un brazo robótico controlado por microcontroladores para realizar tareas de ensamblaje de precisión.",
        image: "/images/robotic-arm.jpg",
    },
    {
        title: "Sistema de Riego Automatizado",
        description:
            "Un sistema que utiliza sensores y microcontroladores para optimizar el riego en cultivos agrícolas.",
        image: "/images/irrigation-system.jpg",
    },
];

const Projects: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                    Proyectos de Diseño con Microcontroladores
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-gray-800">
                                    {project.title}
                                </h2>
                                <p className="text-gray-600 mt-2">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;