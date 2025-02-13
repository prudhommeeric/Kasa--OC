import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Carousel.css';
import Chevron from '../../assets/image/Chevron/chevron.png';

const Carousel = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  

  

  const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    
  };

  const handlePrev = () => {
    
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    
  };

  if (!images) {
    return <div>Chargement...</div>;
  }

  const totalImages = images.length;

  return (
    <div className="carousel">
      <button onClick={handlePrev} className="carousel__btn carousel__btn--left">
        <img src={Chevron} alt="Chevron gauche" className="carousel__chevron carousel__chevron--left" />
      </button>
      <div className="carousel__content">
        <img
          src={images[currentIndex]}
          alt={images.title}
          className="carousel__image"
        />
        <div className="carousel__indicator">
          {currentIndex + 1} / {totalImages}
        </div>
      </div>
      <button onClick={handleNext} className="carousel__btn carousel__btn--right">
        <img src={Chevron} alt="Chevron droite" className="carousel__chevron carousel__chevron--right" />
      </button>
    </div>
  );
};

export default Carousel;
