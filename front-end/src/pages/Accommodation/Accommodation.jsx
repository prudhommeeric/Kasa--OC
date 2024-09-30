import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importation de useNavigate pour gérer les erreurs
import Slideshow from '../../components/Carousel/Carousel';
import RatingStars from '../../components/CardsContainer/RatingStars/RatingStars';
import Collapse from '../../components/Collapse/Collapse';
import './Accommodation.css';

const Accommodation = () => {
  const { id } = useParams(); // Récupère l'id de l'URL
  const navigate = useNavigate(); // Hook pour rediriger vers la page d'erreur
  const [property, setProperty] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((response) => {
        if (response.status === 404) {
          navigate('/error'); // Redirection si l'ID est incorrect
          return null;
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          setProperty(data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données:', error);
        navigate('/error'); // Redirection en cas d'erreur
      });
  }, [id, navigate]);

  if (isLoading) {
    return <div>Chargement...</div>; // Affiche un message de chargement
  }

  return (
    <div className="accommodation">
      {/* Carrousel */}
      <Slideshow pictures={property.pictures} /> {/* Affichage du carrousel avec les images */}

      {/* Conteneur principal */}
      <div className="accommodation__content">

        {/* Conteneur pour le titre, la localisation et les informations de l'hôte */}
        <div className="accommodation__info">
          <div className="accommodation__title-location">
            <h1 className="accommodation__title">{property.title}</h1>
            <p className="accommodation__location">{property.location}</p>
          </div>

          <div className="accommodation__host-info">
            <h2 className="accommodation__host-name">{property.host.name}</h2>
            <img src={property.host.picture} alt={property.host.name} className="accommodation__host-picture" />
          </div>
        </div>

        {/* Section des tags et étoiles de notation */}
        <div className="accommodation__tags-rating">
          <div className="accommodation__tags-list">
            {property.tags.map((tag, index) => (
              <span key={index} className="accommodation__tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="accommodation__rating-stars">
            <RatingStars rating={parseInt(property.rating)} />
          </div>
        </div>
      </div>

      {/* Conteneur des collapses */}
      <div className="accommodation__collapses">
        <Collapse title="Description" content={property.description} />
        <Collapse
          title="Équipements"
          content={
            <ul className="accommodation__equipments-list">
              {property.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default Accommodation;
