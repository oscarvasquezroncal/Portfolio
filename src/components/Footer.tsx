import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background py-4">
      <div className="text-center text-sm text-textSecondary">
        © {new Date().getFullYear()} Oscar Talaverano. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
