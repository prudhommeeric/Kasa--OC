import React from 'react';
import './home.css'; 
import BannerImage from '../../assets/image/Banner/Banner.png';
import CardsContainer from './CardsContainer.jsx';



function Home() {
  return (
    <div className="home">
      <div className="banner">
        <img src={BannerImage} alt="Bannière d'accueil" className="banner-image" />
        <div className="banner-text">
          <h1>Chez vous, partout et d'ailleurs</h1>
        </div>
      </div>
      
      {/* Encart des cartes */}
      <CardsContainer />
    </div>
  );
}

export default Home;
