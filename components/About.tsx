import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-black scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           <div>
            <div
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600880292210-4928b4382103?q=80&w=800&h=800&fm=webp&fit=crop')` }}
              role="img"
              aria-label="Elaboración de ambientadores de alta calidad"
              className="rounded-lg shadow-2xl mx-auto w-full aspect-square max-w-md bg-cover bg-center"
            ></div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-white mb-4">Nuestra Pasión, tu Aroma</h2>
            <div className="mb-6 inline-block h-1 w-24 bg-amber-500 rounded md:mx-0"></div>
            <p className="text-gray-300 text-lg mb-6">
              En BlackLabel Scents, creemos que cada viaje debe ser una experiencia memorable. Nacimos de la pasión por los detalles y el amor por las fragancias que evocan emociones y crean ambientes.
            </p>
            <p className="text-gray-400 mb-8">
              Nuestra misión es transformar el interior de tu coche en un santuario de lujo y confort. Seleccionamos cuidadosamente cada ingrediente para ofrecerte aromas exclusivos y duraderos que reflejen tu estilo y personalidad. Calidad, elegancia y sofisticación en cada gota.
            </p>
             <a
              href="#aromas"
              className="bg-transparent border-2 border-amber-500 text-amber-500 font-bold py-3 px-8 rounded-md text-lg hover:bg-amber-500 hover:text-black transition-colors duration-300"
            >
              Ver Productos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;