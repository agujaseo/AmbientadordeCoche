import React, { useState } from 'react';
import type { Review } from '../types';
import StarRating from './StarRating';

const StarRatingInput: React.FC<{ rating: number; setRating: (rating: number) => void }> = ({ rating, setRating }) => {
  const [hoverRating, setHoverRating] = useState(0);
  return (
    <div className="flex" onMouseLeave={() => setHoverRating(0)}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          type="button"
          key={star}
          onMouseEnter={() => setHoverRating(star)}
          onClick={() => setRating(star)}
          className="focus:outline-none"
          aria-label={`Calificar con ${star} estrellas`}
        >
          <svg
            className={`w-6 h-6 transition-colors duration-200 ${
              (hoverRating || rating) >= star ? 'text-amber-400' : 'text-gray-600'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </button>
      ))}
    </div>
  );
};


const ReviewSection: React.FC<{
  reviews: Review[];
  onSubmit: (newReview: { author: string; rating: number; text: string }) => void;
}> = ({ reviews, onSubmit }) => {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      setError('Por favor, selecciona una calificación.');
      return;
    }
    if (!text.trim()) {
      setError('Por favor, escribe tu opinión.');
      return;
    }
    onSubmit({ author: author.trim() || 'Anónimo', rating, text });
    setAuthor('');
    setText('');
    setRating(0);
    setError('');
  };

  return (
    <div className="p-6 border-t border-gray-700 space-y-6">
      <h4 className="font-bold text-lg text-white">Opiniones de clientes</h4>
      <div className="space-y-4 max-h-60 overflow-y-auto pr-2">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="border-b border-gray-800 pb-2">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-white">{review.author}</p>
                <StarRating rating={review.rating} />
              </div>
              <p className="text-gray-400 text-sm mt-1">{review.text}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm">Aún no hay opiniones para este producto. ¡Sé el primero!</p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-gray-800">
        <h4 className="font-bold text-lg text-white">Añade tu opinión</h4>
        <div>
          <label htmlFor="rating" className="block text-sm font-medium text-gray-300 mb-2">
            Tu calificación
          </label>
          <StarRatingInput rating={rating} setRating={setRating} />
        </div>
        <div>
          <label htmlFor="author" className="block text-sm font-medium text-gray-300 mb-1">
            Nombre (opcional)
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full bg-gray-800 border-gray-700 rounded-md p-2 text-white focus:ring-amber-500 focus:border-amber-500"
            placeholder="Anónimo"
          />
        </div>
        <div>
          <label htmlFor="review-text" className="block text-sm font-medium text-gray-300 mb-1">
            Tu opinión
          </label>
          <textarea
            id="review-text"
            rows={3}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full bg-gray-800 border-gray-700 rounded-md p-2 text-white focus:ring-amber-500 focus:border-amber-500"
            placeholder="¿Qué te ha parecido el producto?"
          />
        </div>
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-amber-500 text-black font-semibold py-2 px-5 rounded-md hover:bg-amber-400 transition-colors duration-300"
        >
          Enviar reseña
        </button>
      </form>
    </div>
  );
};

export default ReviewSection;
