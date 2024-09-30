import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importation du hook useNavigate
import './CardsContainer.css'; 

const CardsContainer = () => {
    const [properties, setProperties] = useState([]);
    const navigate = useNavigate(); // Initialisation du hook

    useEffect(() => {
        // Appel de l'API pour récupérer les données
        fetch('http://localhost:8080/api/properties')
            .then((response) => {
                if (response.status === 404) {
                    navigate('/error'); // Redirection en cas de 404
                    return null; // Stop l'exécution ici
                }
                return response.json(); 
            })
            .then((data) => {
                if (data) { // S'assurer que les données existent
                    setProperties(data); // Mettre à jour l'état avec les données récupérées
                }
            })
            .catch((error) => {
                console.error('Erreur:', error);
                navigate('/error'); // Redirection en cas d'erreur réseau
            });
    }, [navigate]);

    return (
        <div className="cards-container">
            {properties.length > 0 ? (
                properties.map((property) => (
                    <div key={property.id} className="card" onClick={() => window.location.href = `/accommodation/${property.id}`}>
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
