import React from 'react';
import './About.css';
import Banner from '../../components/Banner/Banner'; 
import AboutBannerImage from '../../assets/image/Banner/AboutBanner.png'; 
import Collapse from '../../components/Collapse/Collapse'; // Import du composant Collapse

function About() {
    return (
        <div>
            <Banner image={AboutBannerImage} /> {/* Utilisation du composant Banner avec l'image AboutBanner */}
			<div className="block-collapse">
            <Collapse 
                title="Fiabilité" 
                content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nous équipes." 
            />
			<Collapse 
                title="Respect" 
                content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation de voicinage entraînera une exclusion de notre plateforme." 
            />
						<Collapse 
                title="Service" 
                content="La qualité du serive est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance." 
            />
						<Collapse 
                title="Sécurité" 
                content="La sécurité est la priorité de Kaza. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécutité domestique pour nos hôtes." 
            />
        </div>
		</div>
    );
}

export default About;
