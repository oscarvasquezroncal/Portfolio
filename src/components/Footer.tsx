import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto text-center">
        {/* Enlaces de redes sociales */}
        <div className="mb-4">
          <a
            href="https://www.linkedin.com/in/tu-perfil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors duration-300 mx-2"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors duration-300 mx-2"
          >
            GitHub
          </a>
          <a
            href="mailto:tuemail@example.com"
            className="text-gray-600 hover:text-gray-800 transition-colors duration-300 mx-2"
          >
            Email
          </a>
        </div>
        {/* Derechos de autor */}
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} Oscar Alhdhair Vasquez Roncal. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
