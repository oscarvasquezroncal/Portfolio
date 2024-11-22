import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto text-center">

        <hr className="border-t border-gray-300 mb-6" />

        <div className="mb-4 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/oscar-alhdahir-vasquez-roncal-133140281/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/theosquitar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="mailto:oscarvasquezroncal@gmail.com"
            className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} Oscar Alhdhair Vasquez Roncal. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
