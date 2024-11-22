import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="container mx-auto py-16 px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Imagen personal */}
      <motion.div
        className="flex justify-center lg:justify-end"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative group">
          <img
            src="/src/assets/foto.png"
            alt="Oscar Alhdhair Vasquez Roncal"
            className="rounded-lg shadow-lg max-w-full h-auto transition-transform duration-500 transform group-hover:scale-105 group-hover:rotate-2"
          />
          <div className="absolute inset-0 bg-black bg-opacity-25 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </motion.div>

      {/* Encabezado y descripción */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-primary mb-2 leading-snug">
          Como desarrollador, creo en resolver problemas con diseño intuitivo y soluciones significativas.
        </h2>
        <p className="text-lg text-secondary leading-relaxed">
          Mi trayectoria en el desarrollo de software comenzó trabajando en proyectos pequeños, en donde fui perfeccionando mis habilidades en React, Node.js y Python. Esto me permitió trabajar con equipos para construir sistemas eficientes y escalables.
        </p>
        <p className="text-lg text-secondary leading-relaxed">
          Siempre estoy enfocado en ofrecer soluciones que sean no solo funcionales, sino también accesibles y amigables para los usuarios. Mi pasión por aprender me lleva a adoptar nuevas tecnologías para mejorar la calidad de mis proyectos.
        </p>
        <motion.a
          href="https://drive.google.com/file/d/1dVCT-jfwXCgTa3_j5gMYYTpODyu2cxRz/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-2 border-accent text-accent font-semibold py-3 px-8 rounded-full shadow-md hover:bg-accent hover:text-white transition-all duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Ver mi CV
        </motion.a>
      </motion.div>
    </section>
  );
};

export default About;
