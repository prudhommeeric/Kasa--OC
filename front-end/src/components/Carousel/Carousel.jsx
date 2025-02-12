import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Carousel.css';
import Chevron from '../../assets/image/Chevron/chevron.png';

const Slideshow = ({images}) => {
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
    <div className="slideshow">
      <button onClick={handlePrev} className="slideshow__btn slideshow__btn--left">
        <img src={Chevron} alt="Chevron gauche" className="slideshow__chevron slideshow__chevron--left" />
      </button>
      <div className="slideshow__content">
        <img
          src={images[currentIndex]}
          alt={images.title}
          className="slideshow__image"
        />
        <div className="slideshow__indicator">
          {currentIndex + 1} / {totalImages}
        </div>
      </div>
      <button onClick={handleNext} className="slideshow__btn slideshow__btn--right">
        <img src={Chevron} alt="Chevron droite" className="slideshow__chevron slideshow__chevron--right" />
      </button>
    </div>
  );
};

export default Slideshow;
