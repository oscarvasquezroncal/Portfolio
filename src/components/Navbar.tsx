import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const links = [
    { name: 'Proyectos', href: '/' },
    { name: 'Sobre mí', href: '/about' },
    { name: 'Contacto', href: '/contact' },
  ];

  return (
    <nav className="w-full bg-background py-6 flex justify-end pr-12">
      <div className="flex space-x-8 text-sm text-textDark font-medium">
        {links.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            className="hover:text-accent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            {link.name}
          </motion.a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
