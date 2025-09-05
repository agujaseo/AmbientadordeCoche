import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-950 scroll-mt-28">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-4">¿Hablamos?</h2>
        <div className="mb-8 inline-block h-1 w-24 bg-amber-500 rounded"></div>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
          Estamos aquí para ayudarte. Si tienes preguntas sobre nuestros productos, personalización para empresas o eventos, o simplemente quieres decir hola, no dudes en contactarnos.
        </p>
        <a
          href="mailto:info@ambientadordecoche.es"
          className="bg-amber-500 text-black font-bold py-4 px-10 rounded-md text-xl hover:bg-amber-400 transition-transform duration-300 transform inline-block hover:scale-105"
        >
          Enviar un Email
        </a>
      </div>
    </section>
  );
};

export default Contact;