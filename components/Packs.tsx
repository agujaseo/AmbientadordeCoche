
import React, { useState, useCallback } from 'react';
import { AROMAS, PAYMENT_URL } from '../constants';

interface PackSelectorProps {
  packSize: number;
  price: number;
  title: string;
  description: string;
}

const PackSelector: React.FC<PackSelectorProps> = ({ packSize, price, title, description }) => {
  const [selectedAromas, setSelectedAromas] = useState<string[]>([]);

  const handleAromaChange = useCallback((aromaName: string) => {
    setSelectedAromas(prev => {
      const isSelected = prev.includes(aromaName);
      if (isSelected) {
        return prev.filter(name => name !== aromaName);
      } else {
        if (prev.length < packSize) {
          return [...prev, aromaName];
        }
        return prev;
      }
    });
  }, [packSize]);

  const isSelectionComplete = selectedAromas.length === packSize;

  const handleBuyClick = () => {
    window.open(PAYMENT_URL, '_blank');
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 flex flex-col">
      <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {AROMAS.map((aroma) => (
          <label key={aroma.id} className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedAromas.includes(aroma.name)}
              onChange={() => handleAromaChange(aroma.name)}
              disabled={!selectedAromas.includes(aroma.name) && selectedAromas.length >= packSize}
              className="form-checkbox h-5 w-5 bg-gray-800 border-gray-600 rounded text-amber-500 focus:ring-amber-500"
            />
            <span className="text-gray-300">{aroma.name}</span>
          </label>
        ))}
      </div>
      <div className="mt-auto pt-6 border-t border-gray-700">
        <p className="text-sm text-amber-400 font-semibold mb-4">
          Seleccionados: {selectedAromas.length} de {packSize}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-white">{price}€</span>
          <button
            onClick={handleBuyClick}
            disabled={!isSelectionComplete}
            className={`font-bold py-3 px-6 rounded-md transition-colors duration-300 ${
              isSelectionComplete
                ? 'bg-amber-500 text-black hover:bg-amber-400'
                : 'bg-gray-700 text-gray-500 cursor-not-allowed'
            }`}
          >
            Comprar Pack
          </button>
        </div>
      </div>
    </div>
  );
};

const Packs: React.FC = () => {
  return (
    <section id="packs" className="py-20 bg-gray-950 scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">Crea tu Pack Ideal</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Ahorra comprando nuestros packs y elige tus aromas favoritos para crear una combinación perfecta.
          </p>
          <div className="mt-4 inline-block h-1 w-24 bg-amber-500 rounded"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <PackSelector
            packSize={3}
            price={18}
            title="Pack 3 Aromas"
            description="Elige 3 de tus aromas favoritos y ahorra."
          />
          <PackSelector
            packSize={5}
            price={28}
            title="Pack 5 Aromas"
            description="La colección definitiva. Elige 5 aromas a un precio especial."
          />
        </div>
      </div>
    </section>
  );
};

export default Packs;