import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import About from './pages/About/About'
import Accommodation from './pages/Accommodation/Accommodation'
import Error from './pages/Error/Error'
import Home from './pages/Home/Home'
import './App.css'

function App () {
	return (
	  <Router>
		  <div className={'layout-wrapper'}>
			  <Header/> {/* Affichage du header sur toutes les pages */}
			  <Routes>
				  <Route path="/" element={<Home/>}/> {/* Route vers la page d'accueil */}
				  <Route path="/about" element={<About/>}/> {/* Route vers la page about */}
				  <Route path="/accomodation/:id" element={<Accommodation/>}/> {/* Route vers la page logement (:id permet de matcher avec n'importe quel pattern (eg: /accommodation/toto, ou /accommodation/35, ...) */}
				  <Route path="/*" element={<Error/>}/> {/* Route vers la page error */}
			  </Routes>
		  </div>
		  <Footer/> {/* Ajout du footer à toutes les pages */}
	  </Router>
	)
}

export default App