import React, { useState } from 'react';
import './Collapse.css'; // Assurez-vous d'avoir un fichier CSS pour le style
import ChevronImage from '../../assets/image/Chevron/chevron.png'; // Importer l'image du chevron

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false); // État pour gérer l'ouverture/fermeture

    const toggleCollapse = () => {
        setIsOpen(!isOpen); // Inverse l'état
    };

    return (
        <div className="collapse">
            <div className="collapse-title" onClick={toggleCollapse}>
                <span>{title}</span>
                <img
                    src={ChevronImage}
                    alt="Chevron"
                    className={`chevron ${isOpen ? 'rotate-up' : 'rotate-down'}`} // Rotation selon l'état
                />
            </div>
            {isOpen && <div className="collapse-content">{content}</div>} {/* Affiche le contenu si ouvert */}
        </div>
    );
}

export default Collapse;
