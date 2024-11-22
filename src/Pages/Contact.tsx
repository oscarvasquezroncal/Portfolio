import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-background flex flex-col justify-center items-center px-8">
      {/* Encabezado animado */}
      <motion.h2
        className="text-5xl font-extrabold text-textDark mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        ¡Contáctame!
      </motion.h2>
      <motion.p
        className="text-lg text-gray-600 mb-12 text-center max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Si estás interesado en colaborar conmigo o tienes alguna pregunta, no dudes en escribirme.
        Estoy listo para trabajar contigo en tu próximo gran proyecto.
      </motion.p>

      {/* Tarjeta de contacto */}
      <motion.div
        className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-4xl flex flex-col md:flex-row items-center gap-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Foto de perfil */}
        <motion.div
          className="relative w-36 h-36 rounded-full overflow-hidden shadow-lg flex-shrink-0"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="/img/foto.png"
            alt="Oscar Vasquez"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-40 transition duration-300"></div>
        </motion.div>

        {/* Información de contacto */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <motion.h3
            className="text-3xl font-bold text-gray-800"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ¡Hablemos!
          </motion.h3>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            +51 966 554 485
          </motion.p>
          <motion.a
            href="https://wa.me/51966554485"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-green-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/img/wasap.png"
              alt="WhatsApp"
              className="w-6 h-6 mr-2"
            />
            Enviar mensaje
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
