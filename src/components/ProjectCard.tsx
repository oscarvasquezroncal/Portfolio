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
      className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.5 }}
    >
      <a href={projectUrl} target="_blank" rel="noopener noreferrer">
        <div className="overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6 bg-white">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectCard;
