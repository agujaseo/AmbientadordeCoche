
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/carinterior/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 tracking-wide">
          La Esencia del Lujo en tu Coche
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Transforma cada viaje en una experiencia inolvidable con nuestros ambientadores premium de 100ml.
        </p>
        <a
          href="#aromas"
          className="bg-amber-500 text-black font-bold py-3 px-8 rounded-md text-lg hover:bg-amber-400 transition-transform duration-300 transform hover:scale-105"
        >
          Descubre la Colección
        </a>
      </div>
    </section>
  );
};

export default Hero;
