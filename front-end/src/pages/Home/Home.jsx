import React from 'react';
import './home.css';
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import Banner from '../../components/Banner/Banner';

function Home() {
  return (
    <main>
      <div className="home">
        <Banner text="Chez vous, partout et d'ailleurs" />
        
        {/* Encart des cartes */}
        <CardsContainer />
      </div>
    </main>
  );
}

export default Home;
