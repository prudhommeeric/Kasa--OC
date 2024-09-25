import React, { useState, useEffect } from 'react';
import './CardsContainer.css';

const CardsContainer = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        // Appel de l'API pour récupérer les données
        fetch('http://localhost:8080/api/properties')
            .then((response) => response.json())
            .then((data) => {
                setProperties(data); // Mettre à jour l'état avec les données récupérées
            })
            .catch((error) => console.error('Erreur:', error));
    }, []);

    return (
        <div className="cards-container">
            {properties.length > 0 ? (
                properties.map((property) => (
                    <div key={property.id} className="card">
                        <img
                            src={property.cover}
                            alt={property.title}
                            className="card-image"
                        />
                        <h3 className="card-title">{property.title}</h3>
                    </div>
                ))
            ) : (
                <p>Chargement des propriétés...</p>
            )}
        </div>
    );
};

export default CardsContainer;
