import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';
import ScrollDownButton from '../components/ScrollDownButton';

const Home: React.FC = () => {
  const projects = [
    {
      title: 'MR Consultores',
      description: 'Asesoría contable y empresarial para decisiones financieras sólidas.',
      imageUrl: '/img/mr-consultores.jpg', 
      projectUrl: 'https://mrconsultores.pe/',
    },
    {
      title: 'Axel Móvil',
      description: 'Soluciones móviles y telecomunicaciones para empresas y usuarios.',
      imageUrl: '/img/axel-movil.jpg', 
      projectUrl: 'https://axelmovil.com/',
    },
    {
      title: 'Integral 360',
      description: 'Reparación y mantenimiento industrial especializado.',
      imageUrl: '/img/integral360.jpg', 
      projectUrl: 'https://integral360peru.com/',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center justify-center px-16 bg-background">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-16">
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
          </motion.div>

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

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ScrollDownButton />
        </div>
      </section>

      <section id="projects" className="container mx-auto py-16 px-8">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Proyectos Destacados
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
              <div className="bg-white p-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </section>

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
