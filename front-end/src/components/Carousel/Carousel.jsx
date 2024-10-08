import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Carousel.css';
import Chevron from '../../assets/image/Chevron/chevron.png';

const Slideshow = () => {
  const { id } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentProperty, setCurrentProperty] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/properties')
      .then((response) => response.json())
      .then((data) => {
        const selectedProperty = data.find((property) => property.id === id);
        setCurrentProperty(selectedProperty);
      })
      .catch((error) => console.error('Erreur lors de la récupération des données:', error));
  }, [id]);

  const handleNext = () => {
    if (currentProperty) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % currentProperty.pictures.length);
    }
  };

  const handlePrev = () => {
    if (currentProperty) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + currentProperty.pictures.length) % currentProperty.pictures.length);
    }
  };

  if (!currentProperty) {
    return <div>Chargement...</div>;
  }

  const totalImages = currentProperty.pictures.length;

  return (
    <div className="slideshow">
      <button onClick={handlePrev} className="slideshow__btn slideshow__btn--left">
        <img src={Chevron} alt="Chevron gauche" className="slideshow__chevron slideshow__chevron--left" />
      </button>
      <div className="slideshow__content">
        <img
          src={currentProperty.pictures[currentIndex]}
          alt={currentProperty.title}
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
