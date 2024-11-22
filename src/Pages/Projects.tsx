import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Proyecto 1',
    description: 'Descripción breve del proyecto 1.',
    imageUrl: '/path/to/image1.jpg',
    projectUrl: '/projects/1',
  },
  // Agrega más proyectos según sea necesario
];

const Projects: React.FC = () => {
  return (
    <section className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-primary mb-6">Mis Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
