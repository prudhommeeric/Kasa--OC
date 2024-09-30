import React, { useState } from 'react';
import './Collapse.css';
import ChevronImage from '../../assets/image/Chevron/chevron.png';

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false); // État pour gérer l'ouverture/fermeture

    const toggleCollapse = () => {
        setIsOpen(!isOpen); // Inverse l'état
    };

    return (
        <div className="accommodation__collapse">
            <div className="accommodation__collapse-title" onClick={toggleCollapse}>
                <span>{title}</span>
                <img
                    src={ChevronImage}
                    alt="Chevron"
                    className={`accommodation__chevron ${isOpen ? 'accommodation__rotate-up' : 'accommodation__rotate-down'}`} // Rotation selon l'état
                />
            </div>
            {isOpen && <div className="accommodation__collapse-content">{content}</div>} {/* Affiche le contenu si ouvert */}
        </div>
    );
}

export default Collapse;
