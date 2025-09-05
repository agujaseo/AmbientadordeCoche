import React, { useState } from 'react';
import { AROMAS } from '../constants';
import type { Product, Pack } from '../types';

interface PacksProps {
  onAddToCart: (pack: Pack, quantity: number) => void;
}

interface PackConfig {
  size: number;
  price: number;
  originalPrice: number;
  image: string;
}

const packConfigs: Record<string, PackConfig> = {
  pack3: { size: 3, price: 18.00, originalPrice: 21.00, image: 'https://picsum.photos/seed/pack3/500/500' },
  pack5: { size: 5, price: 28.00, originalPrice: 35.00, image: 'https://picsum.photos/seed/pack5/500/500' },
};

const PackSelector: React.FC<{ config: PackConfig; onAddToCart: PacksProps['onAddToCart'] }> = ({ config, onAddToCart }) => {
  const [selectedAromas, setSelectedAromas] = useState<Product[]>([]);

  const handleSelectAroma = (aroma: Product) => {
    setSelectedAromas(prev => {
      if (prev.find(p => p.id === aroma.id)) {
        return prev.filter(p => p.id !== aroma.id); // Deselect
      }
      if (prev.length < config.size) {
        return [...prev, aroma]; // Select
      }
      return prev; // Limit reached
    });
  };

  const handleAddToCart = () => {
    if (selectedAromas.length !== config.size) return;
    
    const aromaNames = selectedAromas.map(a => a.name).join(', ');
    const packName = `Pack x${config.size}`;
    const packId = `pack-${config.size}-${selectedAromas.map(a => a.id).sort().join('-')}`;

    const packToAdd: Pack = {
      id: packId,
      name: packName,
      description: `Selección: ${aromaNames}`,
      price: config.price,
      originalPrice: config.originalPrice,
      items: selectedAromas.map(a => a.name),
      image: config.image,
    };
    onAddToCart(packToAdd, 1);
    setSelectedAromas([]); // Reset after adding
  };
  
  const isSelectionComplete = selectedAromas.length === config.size;

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
      <div className="relative">
        <img src={config.image} alt={`Pack de ${config.size} ambientadores`} className="w-full h-64 object-cover"/>
        <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">OFERTA</span>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white mb-2">Pack x{config.size} Personalizado</h3>
        <p className="text-gray-400 text-sm mb-4">Elige {config.size} de tus aromas favoritos y ahorra.</p>
        
        <div className="mb-4 flex-grow">
            <p className="text-white font-semibold mb-2">Selecciona tus aromas ({selectedAromas.length}/{config.size}):</p>
            <div className="flex flex-wrap gap-2">
                {AROMAS.map(aroma => {
                    const isSelected = !!selectedAromas.find(p => p.id === aroma.id);
                    const isDisabled = !isSelected && selectedAromas.length >= config.size;
                    return (
                        <button 
                            key={aroma.id}
                            onClick={() => handleSelectAroma(aroma)}
                            disabled={isDisabled}
                            className={`px-3 py-1 text-sm rounded-full border transition-all duration-200 ${
                                isSelected 
                                ? 'bg-amber-500 border-amber-500 text-black font-semibold' 
                                : 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600'
                            } ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {aroma.name}
                        </button>
                    )
                })}
            </div>
        </div>

        <div className="flex items-baseline justify-center text-center my-4">
          <span className="text-4xl font-extrabold text-white">{config.price.toFixed(2)}€</span>
          <span className="ml-2 text-lg text-gray-500 line-through">{config.originalPrice.toFixed(2)}€</span>
        </div>
        
        <button 
          onClick={handleAddToCart}
          disabled={!isSelectionComplete}
          className="w-full mt-auto bg-amber-500 text-black font-bold py-3 px-8 rounded-md text-lg transition-colors duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-amber-400"
        >
          {isSelectionComplete ? 'Añadir al Carrito' : `Selecciona ${config.size - selectedAromas.length} más`}
        </button>
      </div>
    </div>
  );
};


const Packs: React.FC<PacksProps> = ({ onAddToCart }) => {
  return (
    <section id="packs" className="py-20 bg-gray-950 scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">Crea tu Propio Pack</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Selecciona tus aromas preferidos y benefíciate de un precio especial.
          </p>
          <div className="mt-4 inline-block h-1 w-24 bg-amber-500 rounded"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <PackSelector config={packConfigs.pack3} onAddToCart={onAddToCart} />
            <PackSelector config={packConfigs.pack5} onAddToCart={onAddToCart} />
        </div>
      </div>
    </section>
  );
};

export default Packs;
