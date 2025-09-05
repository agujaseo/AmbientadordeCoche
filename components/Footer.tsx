
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-8 text-center text-gray-500">
        <p className="font-bold text-lg text-gray-300 mb-2">BLACK LABEL SCENTS</p>
        <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
        <p className="text-sm mt-2">
            Este es un sitio web de demostración. Las compras no son reales.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-amber-400 transition-colors">Instagram</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Facebook</a>
            <a href="mailto:contacto@blacklabelscents.test" className="hover:text-amber-400 transition-colors">Contacto</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
