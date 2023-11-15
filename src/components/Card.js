import React from 'react';
import { Link } from 'react-router-dom';
import DataLocations from '../assets/locations.json';


const Card = () => { 
    
    const renderCards = () => {
        const firstSixLocations = DataLocations.slice(0, 6); // Prend les six premières locations de Datalocations (fichier json)

        // Création carte firstSixLocations + lien (Link) vers page basée sur l'ID de la location.
        return firstSixLocations.map((location) => (
            <Link to={`/location-page/${location.id}`} key={location.id} className="card" >
                <img src={location.cover} alt="photo location appartement" />
                <div className="card__overlay"></div>
                <h2>{location.title}</h2>
            </Link>
        ));
    };

    return (
        // Rend la galerie de cartes dans la gallerie
        <div className="gallery">
            {renderCards()}
        </div>
    );
};

export default Card;