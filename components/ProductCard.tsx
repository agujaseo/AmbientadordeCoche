import React, { useState } from 'react';
import type { Product } from '../types';
import { BASE_PRICE } from '../constants';
import StarRating from './StarRating';

interface ProductCardProps {
  product: Product;
  onToggleReviews: () => void;
  isReviewsOpen: boolean;
  onAddToCart: (product: Product, quantity: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onToggleReviews, isReviewsOpen, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCartClick = () => {
    onAddToCart(product, quantity);
  };

  const averageRating = product.reviews.length > 0
    ? product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length
    : 0;

  return (
    <>
      <div className="relative overflow-hidden">
        <img
          src={product.imageUrl}
          alt={`Ambientador de coche aroma ${product.name}`}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
        
        {product.reviews.length > 0 && (
           <div className="flex items-center gap-2 mb-2" aria-label={`Calificación media: ${averageRating.toFixed(1)} de 5 estrellas`}>
            <StarRating rating={averageRating} />
            <span className="text-xs text-gray-400">({product.reviews.length} {product.reviews.length === 1 ? 'opinión' : 'opiniones'})</span>
          </div>
        )}
       
        <p className="text-gray-400 text-sm mb-4 flex-grow">Pulverizador 100ml</p>
        
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-4">
            <span className="text-2xl font-bold text-amber-400">{BASE_PRICE * quantity}€</span>
             <select
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block p-2"
              aria-label="Seleccionar cantidad"
            >
              <option value="1">1 Unidad</option>
              <option value="3">3 Unidades</option>
              <option value="5">5 Unidades</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-2">
             <button
              onClick={onToggleReviews}
              className="w-full bg-gray-700 text-white font-semibold py-2 px-3 rounded-md hover:bg-gray-600 transition-colors duration-300 text-sm"
              aria-expanded={isReviewsOpen}
            >
              {isReviewsOpen ? 'Cerrar Reseñas' : 'Ver Reseñas'}
            </button>
            <button
              onClick={handleAddToCartClick}
              className="w-full bg-amber-500 text-black font-semibold py-2 px-3 rounded-md hover:bg-amber-400 transition-colors duration-300 text-sm"
            >
              Añadir al Carrito
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;