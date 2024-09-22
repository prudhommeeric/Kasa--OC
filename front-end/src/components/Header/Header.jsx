import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/image/Logo/LOGO.png'
import './header.css'

function Header () {
	return (<header className="header">
		<img src={Logo} alt="Logo de l'application" className="logo"/>
		<nav>
			<ul className="nav-links">
				<li>
					<Link to={'/'}>Accueil</Link> {/* Utilisation de la balise Link plutot qu'un simple <a>*/}
				</li>
				<li>
					<Link to={'about'}>A Propos</Link>
				</li>
			</ul>
		</nav>
	</header>)
}

export default Header
