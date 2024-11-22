import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, projectUrl }) => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
      whileHover={{ scale: 1.05, y: -10 }}
      whileTap={{ scale: 0.95 }}
    >
      <a href={projectUrl} target="_blank" rel="noopener noreferrer">
        <div className="relative group">
          {/* Imagen con hover */}
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-56 object-cover group-hover:opacity-75 transition-opacity duration-300"
          />
          {/* Capa oscura al hacer hover */}
          <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6">
          {/* Título */}
          <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
          {/* Descripción */}
          <p className="text-gray-600 mb-4">{description}</p>
          {/* Botón de proyecto */}
          <span className="inline-block text-accent font-medium hover:underline">
            Ver proyecto
          </span>
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectCard;
