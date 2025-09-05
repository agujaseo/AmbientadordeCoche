import React from 'react';

interface StarRatingProps {
  rating: number;
  totalStars?: number;
  className?: string;
}

const Star: React.FC<{ filled: boolean; className?: string }> = ({ filled, className = 'w-4 h-4' }) => (
  <svg
    className={`${filled ? 'text-amber-400' : 'text-gray-600'} ${className}`}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);


const StarRating: React.FC<StarRatingProps> = ({ rating, totalStars = 5, className }) => {
  const roundedRating = Math.round(rating * 2) / 2; // Arredonda a .5 o .0
  
  return (
    <div className={`flex items-center ${className}`}>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return <Star key={index} filled={starValue <= roundedRating} />;
      })}
    </div>
  );
};

export default StarRating;
