import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/image/Logo/LOGO.png';
import './header.css';

function Header() {
  const location = useLocation(); // Récupère l'URL actuelle

  return (
    <header className="header">
      <img src={Logo} alt="Logo de l'application" className="logo" />
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Accueil
            </Link>{/* Utilisation de la balise Link plutot qu'un simple <a>*/}
          </li>
          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
