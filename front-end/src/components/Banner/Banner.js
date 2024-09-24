import React from 'react';
import './Banner.css';

function Banner({ text, image }) {
    return (
        <div className="banner">
            <img src={image} alt="Bannière" className="banner-image" />
            <div className="banner-text">
                <h1>{text}</h1>
            </div>
        </div>
    );
}

export default Banner;
