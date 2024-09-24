import React from 'react'
import './footer.css'
import Logo from '../../assets/image/Logo/LOGO.png'

const Footer = () => {
	return (<footer>
		<img src={Logo} alt="Logo de l'application" className="LogoFooter"/>
		  <p>&copy; 2020 Kasa. All rights reserved</p>
	  </footer>)
}

export default Footer