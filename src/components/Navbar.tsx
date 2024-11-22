import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-background py-6 flex justify-center">
      <div className="flex space-x-8 text-sm text-textDark font-medium">
        <a href="/" className="hover:text-accent">Work</a>
        <a href="/about" className="hover:text-accent">About</a>
        <a href="/contact" className="hover:text-accent">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
