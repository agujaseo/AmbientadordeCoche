import React, { useState } from 'react';
import { AROMAS } from '../constants';
import ProductCard from './ProductCard';
import ReviewSection from './ReviewSection';
import type { Review, Product } from '../types';

interface ProductsProps {
  onAddToCart: (product: Product, quantity: number) => void;
}

const Products: React.FC<ProductsProps> = ({ onAddToCart }) => {
  const [products, setProducts] = useState(AROMAS);
  const [expandedProductId, setExpandedProductId] = useState<number | null>(null);

  const handleToggleReviews = (productId: number) => {
    setExpandedProductId(prevId => (prevId === productId ? null : productId));
  };

  const handleAddReview = (productId: number, newReview: Omit<Review, 'author'> & { author?: string }) => {
    setProducts(currentProducts =>
      currentProducts.map(p =>
        p.id === productId
          ? { ...p, reviews: [...p.reviews, { ...newReview, author: newReview.author || 'Anónimo' }] }
          : p
      )
    );
  };

  return (
    <section id="aromas" className="py-20 bg-black scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">Nuestros Aromas Exclusivos</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Cada aroma ha sido cuidadosamente seleccionado para ofrecer una sensación única y duradera.
          </p>
          <div className="mt-4 inline-block h-1 w-24 bg-amber-500 rounded"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((aroma) => (
            <div
              key={aroma.id}
              className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden group flex flex-col transform hover:-translate-y-2 transition-transform duration-300"
            >
              <ProductCard
                product={aroma}
                onToggleReviews={() => handleToggleReviews(aroma.id)}
                isReviewsOpen={expandedProductId === aroma.id}
                onAddToCart={onAddToCart}
              />
              <div
                className={`transition-[max-height] duration-700 ease-in-out overflow-hidden ${
                  expandedProductId === aroma.id ? 'max-h-[1000px]' : 'max-h-0'
                }`}
              >
                <ReviewSection
                  reviews={aroma.reviews}
                  onSubmit={(review) => handleAddReview(aroma.id, review)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;