import React from 'react';
import './home.css';
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import Banner from '../../components/Banner/Banner';
import BannerImage from '../../assets/image/Banner/Banner.png'; 

function Home() {
    return (
        <main>
            <div className="home">
                <Banner text="Chez vous, partout et d'ailleurs" image={BannerImage} /> {/* Utilisation de l'image de la page d'accueil */}
                
                {/* Encart des cartes */}
                <CardsContainer />
            </div>
        </main>
    );
}

export default Home;
