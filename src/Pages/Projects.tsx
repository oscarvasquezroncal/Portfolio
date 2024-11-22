import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Proyecto 1',
      description: 'Descripción del Proyecto 1',
      imageUrl: '/assets/proyecto1.jpg',
      projectUrl: 'https://example.com/proyecto1',
    },
    {
      title: 'Proyecto 2',
      description: 'Descripción del Proyecto 2',
      imageUrl: '/assets/proyecto2.jpg',
      projectUrl: 'https://example.com/proyecto2',
    },
  ];

  return (
    <section id="projects" className="container mx-auto py-16 px-8">
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
