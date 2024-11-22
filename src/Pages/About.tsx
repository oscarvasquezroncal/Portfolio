import React from 'react';

const About: React.FC = () => {
  return (
    <section className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-primary mb-6">Acerca de Mí</h2>
      <p className="text-secondary leading-relaxed">
        Soy un desarrollador Full-Stack con experiencia en tecnologías como React, Node.js, y bases de datos SQL y NoSQL. Me apasiona crear soluciones eficientes y escalables que aporten valor a los usuarios.
      </p>
    </section>
  );
};

export default About;
