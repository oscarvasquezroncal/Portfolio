import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';
import ScrollDownButton from '../components/ScrollDownButton';
import ProjectCard from '../components/ProjectCard';

const Home: React.FC = () => {
  const projects = [
    {
      title: 'Proyecto 1',
      description: 'Un breve resumen de este increíble proyecto.',
      imageUrl: '/assets/proyecto1.jpg',
      projectUrl: 'https://example.com/proyecto1',
    },
    {
      title: 'Proyecto 2',
      description: 'Otro proyecto fascinante en el que trabajé.',
      imageUrl: '/assets/proyecto2.jpg',
      projectUrl: 'https://example.com/proyecto2',
    },
    {
      title: 'Proyecto 3',
      description: 'Una solución innovadora y eficiente.',
      imageUrl: '/assets/proyecto3.jpg',
      projectUrl: 'https://example.com/proyecto3',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Sección Principal */}
      <section className="relative min-h-screen flex items-center justify-center px-16 bg-background">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-16">
          {/* Texto con animaciones */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-8xl font-extrabold text-textDark leading-tight mb-8">
              Hola, soy Oscar
            </h1>
            <p className="text-2xl text-textSecondary leading-relaxed mb-8">
              Desarrollador Full-Stack apasionado por crear experiencias intuitivas y significativas que conecten personas y tecnología.
            </p>
            <motion.a
              href="#projects"
              className="text-accent text-xl font-semibold underline hover:text-textDark"
              whileHover={{ scale: 1.1 }}
            >
              Ver mis proyectos
            </motion.a>
          </motion.div>

          {/* Animación */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <DotLottieReact
              src="https://lottie.host/63063fef-8743-48ce-9f95-88977bb817f7/ldCDnV3U9S.lottie"
              loop
              autoplay
              style={{ width: '500px', height: '500px' }}
            />
          </motion.div>
        </div>

        {/* Botón de desplazamiento */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ScrollDownButton />
        </div>
      </section>

      {/* Sección de Proyectos */}
      <section id="projects" className="container mx-auto py-16 px-8">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Proyectos
        </motion.h2>
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </section>

      {/* Sección de Contacto */}
      <section id="contact" className="py-16 px-8 text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ¿Listo para contactarme?
        </motion.h2>
        <motion.p
          className="text-lg text-textSecondary leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Si tienes algún proyecto en mente o deseas saber más sobre mi trabajo, no dudes en enviarme un mensaje.
        </motion.p>
      </section>
    </div>
  );
};

export default Home;
