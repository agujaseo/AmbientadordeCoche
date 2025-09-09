
import React from 'react';

const Customization: React.FC = () => {
  return (
    <section id="personalizacion" className="py-20 bg-black scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-white mb-4">Personaliza tu Aroma</h2>
            <div className="mb-6 inline-block h-1 w-24 bg-amber-500 rounded md:mx-0"></div>
            <p className="text-gray-300 text-lg mb-6">
              Hazlo tuyo. Ofrecemos un servicio exclusivo de personalización de etiquetas para que nuestros ambientadores lleven tu marca, el logo de tu empresa o un mensaje especial para un evento.
            </p>
            <ul className="space-y-4 text-gray-400 mb-8">
              <li className="flex items-start">
                <span className="text-amber-500 mr-3 mt-1">&#10003;</span>
                <span><strong>Para tu Negocio:</strong> Potencia tu branding con un detalle olfativo único para tus clientes.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-3 mt-1">&#10003;</span>
                <span><strong>Eventos Especiales:</strong> Un recuerdo inolvidable para bodas, bautizos o cualquier celebración.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-3 mt-1">&#10003;</span>
                <span><strong>Regalos Únicos:</strong> Sorprende a tus seres queridos con un ambientador personalizado.</span>
              </li>
            </ul>
            <a
              href="mailto:info@ambientadordecoche.es"
              className="bg-amber-500 text-black font-bold py-3 px-8 rounded-md text-lg hover:bg-amber-400 transition-transform duration-300 transform inline-block hover:scale-105"
            >
              Contacta para Informes
            </a>
          </div>
          <div>
            <div
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=800&h=800&fm=webp&fit=crop')` }}
              role="img"
              aria-label="Ambientador personalizado con un logo"
              className="rounded-lg shadow-2xl mx-auto w-full aspect-square max-w-md bg-cover bg-center"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customization;