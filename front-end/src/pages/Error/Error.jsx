import React from 'react';
import { Link } from 'react-router-dom';
import './error.css';

function Error() {
  return (
    <div className='error-container'>
      <h2 className='error-code'>404</h2>
      <p className='error-message'>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className='home-link'>Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default Error;
