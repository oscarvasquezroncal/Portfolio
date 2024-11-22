import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Feather App',
      description: 'Aplicación para explorar e identificar aves.',
      imageUrl: '/assets/feather-app.jpg',
      projectUrl: 'https://example.com/feather-app',
    },
    {
      title: 'LINE Translation',
      description: 'Función de traducción en mensajería social.',
      imageUrl: '/assets/line-translation.jpg',
      projectUrl: 'https://example.com/line-translation',
    },
  ];

  return (
    <section className="container mx-auto py-16 px-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
