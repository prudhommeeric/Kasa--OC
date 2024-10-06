import React from 'react';
import './Banner.css';

function Banner({ text, image }) {
    return (
        <div className="banner">
            <img src={image} alt="Bannière" className="banner-image" />          
                <span className="banner-text">{text}</span>
            
        </div>
    );
}

export default Banner;
