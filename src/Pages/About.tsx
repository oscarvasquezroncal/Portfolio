import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const tools = ['React', 'Node.js', 'TypeScript', 'Python', 'JWT', 'Django', 'Azure'];
  const skills = [
    'Desarrollo Full Stack',
    'Seguridad avanzada (JWT, encriptación)',
    'Metodologías Ágiles (Scrum)',
    'Optimización de rendimiento',
    'Integración de tecnologías modernas',
    'Diseño responsivo',
    'Bases de datos escalables',
  ];

  return (
    <section className="container mx-auto py-16 px-8 space-y-16">
      {/* Introducción centrada */}
      <motion.div
        className="flex flex-col lg:flex-row items-center gap-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Foto */}
        <div className="relative group flex justify-center lg:w-1/3">
          <motion.div
            className="overflow-hidden rounded-full shadow-lg relative w-56 h-56"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/img/foto.png"
              alt="Oscar Alhdhair Vasquez Roncal"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-x-0 bottom-4 text-center">
                <span className="text-white font-semibold text-lg">¡Encantado de conocerte!</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Descripción */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left lg:w-2/3 space-y-6"
        >
          <h2 className="text-3xl font-bold text-primary mb-2 leading-snug">
            Como desarrollador, creo en resolver problemas con diseño intuitivo y soluciones
            significativas.
          </h2>
          <p className="text-lg text-secondary leading-relaxed">
            Soy un Ingeniero de Software con más de tres años de experiencia, especializado en la
            implementación de soluciones eficientes y escalables. Tengo una pasión constante por el
            aprendizaje y la adopción de nuevas tecnologías que mejoren la calidad de mis proyectos.
          </p>
          <p className="text-lg text-secondary leading-relaxed">
            Trabajo con un enfoque integral en el desarrollo Full Stack, desde interfaces
            interactivas con React y TypeScript hasta la lógica del servidor con Node.js, Django y
            otras tecnologías modernas. Mi objetivo es ofrecer soluciones robustas, optimizando
            tanto el rendimiento como la seguridad.
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
      </motion.div>

      {/* Habilidades y Herramientas */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Herramientas */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-4">Herramientas</h3>
          <ul className="space-y-2">
            {tools.map((tool, index) => (
              <motion.li
                key={index}
                className="text-lg text-secondary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {tool}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Habilidades */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-4">Habilidades</h3>
          <ul className="space-y-2">
            {skills.map((skill, index) => (
              <motion.li
                key={index}
                className="text-lg text-secondary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
