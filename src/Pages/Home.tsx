import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Home: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-4">
      <div className="max-w-2xl">
        <h1 className="text-6xl font-bold text-textDark mb-6">
          Hola, soy Oscar
        </h1>
        <p className="text-xl text-textSecondary mb-8 leading-relaxed">
          Full-Stack Developer passionate about building intuitive, meaningful experiences that connect people and technology.
        </p>
        <a
          href="/projects"
          className="text-accent text-lg underline font-medium hover:text-textDark"
        >
          View My Work
        </a>
      </div>
      <div className="mt-12">
        <DotLottieReact
          src="https://lottie.host/d7e50db2-2f1d-4f2e-a183-8dbb0fd2831a/v9XSmEvLEu.lottie"
          loop
          autoplay
          style={{ width: '400px', height: '400px' }}
        />
      </div>
    </section>
  );
};

export default Home;
