import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Slideshow from '../../components/Carousel/Carousel'
import Collapse from '../../components/Collapse/Collapse'
import RatingStars from '../../components/RatingStars/RatingStars'
import './accommodation.css'

const Accommodation = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const [property, setProperty] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		fetch(`http://localhost:8080/api/properties/${id}`).then((response) => {
			if (response.status === 404) {
				navigate('/error')
				return null
			}
			return response.json()
		}).then((data) => {
			if (data) {
				setProperty(data)
				setIsLoading(false)
			}
		}).catch((error) => {
			console.error('Erreur lors de la récupération des données:', error)
			navigate('/error')
		})
	}, [id, navigate])

	if (isLoading) {
		return <div>Chargement...</div>
	}

	const [firstname, lastname] = property.host.name.split(' ')

	return (
	  <div className="accommodation">
		  {/* Carrousel avec les images de la propriété */}
		  <Slideshow pictures={property.pictures}/>

		  <div className="accommodation__content">
			  {/* Informations principales */}
			  <div className="accommodation__info">
				  <div className="accommodation__info-left">
					  <div className="accommodation__title-location">
						  <h2 className="accommodation__title">{property.title}</h2>
						  <p className="accommodation__location">{property.location}</p>
					  </div>

					  {/* Tags */}
					  <div className="accommodation__tags-list">
						  {property.tags.map((tag, index) => (
							<span key={index} className="accommodation__tag">{tag}</span>
						  ))}
					  </div>
				  </div>

				  {/* Div parent pour les étoiles et l'information de l'hôte */}
				  <div className="accommodation__info-right">
					  <div className="accommodation__host-info">
						  <p className="accommodation__host-name">{firstname}<br/>{lastname}</p>
						  <img src={property.host.picture} alt={property.host.name} className="accommodation__host-picture"/>
					  </div>

					  <div className="accommodation__rating-stars">
						  <RatingStars rating={parseInt(property.rating)}/>
					  </div>
				  </div>
			  </div>
		  </div>

		  {/* Collapses pour la description et les équipements */}
		  <div className="accommodation__collapses">
			  <Collapse title="Description" content={property.description}/>
			  <Collapse
				title="Équipements"
				content={
					<ul className="accommodation__equipments-list">
						{property.equipments.map((equipment, index) => (
						  <li key={index}>{equipment}</li>
						))}
					</ul>
				}
			  />
		  </div>
	  </div>
	)
}

export default Accommodation
