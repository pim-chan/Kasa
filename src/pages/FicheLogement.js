import React from 'react';
import DataLocations from '../assets/locations.json'
import Carrousel from '../components/Carrousel';
import TitleFicheLogement from '../components/TitleFicheLogement';
import Tags from '../components/Tags';
import Dropdown from '../components/Dropdown';
import Host from '../components/Host';

const FicheLogement = () => {
    const images = DataLocations[0].pictures;
    const equipements = DataLocations[0].equipments;
    const hostPhoto = DataLocations[0].host.picture;
    return (
        <div>
            <Carrousel images={images}/>
            <div className="location-host__container">
                <TitleFicheLogement/>
                <Host hostPhoto = {hostPhoto}/>
            </div>
            <Tags/>
            <div className="fl-dropdowns-container">
                <Dropdown className=" dropdown fl-dropdown" title={"Description"} dropdownText={"Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied)."}/>
                <Dropdown className=" dropdown fl-dropdown" title={"Équipements"} dropdownText={<ul>{equipements.map((equipement, id) => (<li key={id} className='equipement'>{equipement}</li>))}
                </ul>}/>
            </div>
            
        </div>
    );
};

export default FicheLogement;




