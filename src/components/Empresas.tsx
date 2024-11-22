import React from 'react';
import { motion } from 'framer-motion';

const empresas = [
  {
    title: 'MR Consultores',
    description: 'Asesoría contable y empresarial para decisiones financieras sólidas.',
    imageUrl: '../img/mr-consultores.jpg',
    website: 'https://mrconsultores.pe/',
  },
  {
    title: 'Axel Móvil',
    description: 'Soluciones móviles y telecomunicaciones para empresas y usuarios.',
    imageUrl: 'https://axelmovil.com/images/axel-movil.jpg',
    website: 'https://axelmovil.com/',
  },
  {
    title: 'Integral 360',
    description: 'Reparación y mantenimiento industrial especializado.',
    imageUrl: 'https://integral360peru.com/images/integral-360.jpg',
    website: 'https://integral360peru.com/',
  },
];

const Empresas: React.FC = () => {
  return (
    <section className="container mx-auto py-16 px-8">
      <motion.h2
        className="text-4xl font-bold text-gray-800 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Proyectos Destacados
      </motion.h2>
      <motion.div
        className="space-y-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {empresas.map((empresa, index) => (
          <motion.a
            key={index}
            href={empresa.website}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="relative">
              <img
                src={empresa.imageUrl}
                alt={empresa.title}
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="bg-white p-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{empresa.title}</h3>
              <p className="text-gray-600">{empresa.description}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Empresas;
