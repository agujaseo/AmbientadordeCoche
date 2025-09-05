
import React from 'react';

const FeatureCard = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center transform hover:-translate-y-2 transition-transform duration-300">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-amber-500 text-black mx-auto mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{children}</p>
  </div>
);

const LeafIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8"><path d="M11 20A7 7 0 0 1 4 13H2a10 10 0 0 0 10 10zM2 13a10 10 0 0 1 10-10 10 10 0 0 1 10 10h-2a7 7 0 0 0-7-7 7 7 0 0 0-7 7z"/></svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
);

const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);

const SparkleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8"><path d="M12 2L9 9l-7 2 7 2 2 7 2-7 7-2-7-2-3-7z"/></svg>
);


const WhyChooseUs: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 bg-gray-950 scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">¿Por Qué Black Label?</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            No es solo un ambientador, es una declaración de intenciones. Descubre lo que nos hace diferentes.
          </p>
          <div className="mt-4 inline-block h-1 w-24 bg-amber-500 rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard icon={<LeafIcon />} title="Ingredientes Premium">
            Utilizamos solo esencias de alta concentración y alcohol de origen vegetal para un aroma puro y seguro.
          </FeatureCard>
          <FeatureCard icon={<ClockIcon />} title="Máxima Duración">
            Nuestra fórmula avanzada garantiza una fragancia intensa y persistente que dura semanas.
          </FeatureCard>
          <FeatureCard icon={<ShieldIcon />} title="Fabricación Nacional">
            Orgullosamente diseñados y fabricados en España, apoyando la calidad y la industria local.
          </FeatureCard>
          <FeatureCard icon={<SparkleIcon />} title="Diseño Sofisticado">
            La etiqueta 'Black Label' y el envase minimalista aportan un toque de elegancia a cualquier interior.
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;