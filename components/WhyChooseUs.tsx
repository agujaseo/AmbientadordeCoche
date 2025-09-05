import React from 'react';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-gray-900 p-8 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300 border border-gray-800">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-amber-500/10 text-amber-500 mx-auto mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      title: 'Duración Prolongada',
      description: 'Nuestros aromas de 100ml están formulados para perdurar, manteniendo tu coche fresco por más tiempo.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
      title: 'Ingredientes Premium',
      description: 'Utilizamos solo esencias de la más alta calidad para crear fragancias sofisticadas y equilibradas.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      title: 'Diseño Elegante',
      description: 'El envase minimalista y elegante complementa el interior de cualquier vehículo con un toque de distinción.'
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gray-950 scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">¿Por Qué Elegirnos?</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            La diferencia está en los detalles. Descubre lo que nos hace únicos.
          </p>
          <div className="mt-4 inline-block h-1 w-24 bg-amber-500 rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
