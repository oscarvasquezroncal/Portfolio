import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="container mx-auto py-16 px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Encabezado y descripción */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-primary mb-4">Acerca de Mí</h2>
        <p className="text-lg text-secondary leading-relaxed mb-6">
          Soy Ingeniero de Software con tres años de experiencia en el desarrollo de aplicaciones web y soluciones escalables. Estoy comprometido con la implementación de tecnologías modernas para ofrecer productos de alta calidad.
        </p>
        <p className="text-lg text-secondary leading-relaxed mb-6">
          Actualmente trabajo como desarrollador Full-Stack utilizando tecnologías como React, Node.js, TypeScript, y Python, siempre con un enfoque en la seguridad y el rendimiento.
        </p>
        <motion.a
          href="https://drive.google.com/file/d/1dVCT-jfwXCgTa3_j5gMYYTpODyu2cxRz/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accent text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-accent-dark transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Ver mi CV
        </motion.a>
      </motion.div>

      {/* Imagen personal */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="../assets/foto.png"
          alt="Oscar Alhdhair Vasquez Roncal"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </motion.div>
    </section>
  );
};

export default About;
