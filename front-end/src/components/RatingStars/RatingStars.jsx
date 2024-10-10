import React from 'react';
import './RatingStars.css'; 

const RatingStars = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index < rating ? '★' : '☆');

  return (
    <div className="rating-stars">
      {stars.map((star, index) => (
        <span key={index} className="star">{star}</span>
      ))}
    </div>
  );
};

export default RatingStars;
