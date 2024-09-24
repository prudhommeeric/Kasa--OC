import React from 'react';
import './Banner.css';
import BannerImage from '../../assets/image/Banner/Banner.png';

function Banner({ text }) {
    return (
        <div className="banner">
            <img src={BannerImage} alt="Bannière d'accueil" className="banner-image" />
            <div className="banner-text">
                <h1>{text}</h1>
            </div>
        </div>
    );
}

export default Banner;
