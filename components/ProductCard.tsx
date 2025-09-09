import React, { useState } from 'react';
import type { Product } from '../types';
import StarRating from './StarRating';

interface ProductCardProps {
  product: Product;
  onToggleReviews: () => void;
  isReviewsOpen: boolean;
  onAddToCart: (product: Product, quantity: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onToggleReviews, isReviewsOpen, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const averageRating = product.reviews.length > 0
    ? product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length
    : 0;
  
  const handleAddToCart = () => {
    onAddToCart(product, quantity);
  };

  return (
    <>
      <div className="relative">
        <div
          style={{ backgroundImage: `url(${product.image})` }}
          role="img"
          aria-label={product.name}
          className="w-full h-56 bg-cover bg-center"
        ></div>
        <div className="absolute top-0 right-0 bg-black/70 p-2 m-2 rounded-md">
            <span className="text-white font-bold text-lg">{product.price.toFixed(2)}€</span>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
        <p className="text-gray-400 text-sm mb-4 flex-grow">{product.description}</p>
        
        <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
                <StarRating rating={averageRating} />
                <span className="text-gray-500 text-sm ml-2">({product.reviews.length} opiniones)</span>
            </div>
        </div>

        <div className="flex items-center space-x-2 mb-4">
          <button 
            onClick={() => setQuantity(q => Math.max(1, q - 1))}
            className="bg-gray-700 h-8 w-8 rounded-md text-white hover:bg-gray-600 transition-colors"
            aria-label="Reducir cantidad"
          >
            -
          </button>
          <span className="font-bold text-white w-8 text-center">{quantity}</span>
          <button 
            onClick={() => setQuantity(q => q + 1)}
            className="bg-gray-700 h-8 w-8 rounded-md text-white hover:bg-gray-600 transition-colors"
            aria-label="Aumentar cantidad"
          >
            +
          </button>
        </div>

        <button 
          onClick={handleAddToCart}
          className="w-full bg-amber-500 text-black font-semibold py-2 px-5 rounded-md hover:bg-amber-400 transition-colors duration-300"
        >
          Añadir al carrito
        </button>
        <button 
          onClick={onToggleReviews}
          className="w-full mt-2 text-sm text-gray-400 hover:text-amber-400 transition-colors"
        >
          {isReviewsOpen ? 'Ocultar opiniones' : 'Ver opiniones'}
        </button>
      </div>
    </>
  );
};

export default ProductCard;