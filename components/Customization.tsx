import React from 'react';

const MercedesLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-24 h-24 text-gray-400">
        <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="4"/>
        <path d="M50 2 L50 50 M50 50 L93.3 75 M50 50 L6.7 75" fill="none" stroke="currentColor" strokeWidth="4"/>
    </svg>
);


const Customization: React.FC = () => {
  return (
    <section id="personalizacion" className="py-20 bg-black scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative flex justify-center items-center">
            <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-4">
               <img 
                 src="https://picsum.photos/seed/bottle/500/500" 
                 alt="Ejemplo de ambientador Black Label personalizado con el logo de Mercedes Benz"
                 className="rounded-lg w-full max-w-sm"
               />
               <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/60">
                    <MercedesLogo />
                    <p className="text-white text-lg font-bold mt-2">Tu Marca Aquí</p>
               </div>
               <span className="absolute top-4 right-4 bg-amber-500 text-black text-xs font-bold px-2 py-1 rounded">MUESTRA</span>
            </div>
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl font-extrabold text-white">Personaliza tu Esencia</h2>
            <div className="mt-4 mb-6 inline-block h-1 w-24 bg-amber-500 rounded lg:mx-0 mx-auto"></div>
            <p className="text-gray-300 text-lg mb-4">
              ¿Quieres un ambientador con el logo de tu empresa, club o evento? Ofrecemos un servicio de personalización completo para crear un producto único que represente tu marca.
            </p>
            <p className="text-gray-400 mb-8">
              Ideal para regalos corporativos, merchandising o simplemente para darle un toque exclusivo a tu flota de vehículos. Calidad premium, diseño a medida.
            </p>
            <a href="mailto:contacto@blacklabelscents.test" className="bg-gray-200 text-black font-bold py-3 px-8 rounded-md text-lg hover:bg-white transition-colors duration-300">
              Solicitar Información
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customization;