import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import DataLocations from '../assets/locations.json'
import Carrousel from '../components/Carrousel';
import LocationName from  '../components/LocationName'
import Tags from '../components/Tags';
import Dropdown from '../components/Dropdown';
import Host from '../components/Host';
import Rating from '../components/Rating';

const FicheLogement = () => {
    const { id } = useParams(); 

    const imagesCarrousel = DataLocations[0].pictures;
    const equipements = DataLocations[0].equipments;
    const hostPhoto = DataLocations[0].host.picture;
    const description = DataLocations[0].description;

    const filteredData = DataLocations.filter(item => item.id === id);
    if (filteredData.length === 0) {
        return <Navigate to="/error-404"/>;
    }

    return (
        <div>
            <Carrousel images={imagesCarrousel}/>
            <div className="location-infos">
                <div className="title-tags__container">
                    <LocationName/>
                    <Tags/>
                </div>
                <div className="host-rating_container">
                    <Host hostPhoto ={hostPhoto}/>
                    <Rating/>
                </div>
            </div>
            <div className="fl-dropdowns-container">
                <Dropdown className=" dropdown fl-dropdown" 
                title={"Description"} 
                dropdownText={description}
                />
                <Dropdown 
                className="dropdown fl-dropdown" 
                title={"Équipements"} 
                dropdownText={<ul>{equipements.map((equipement, id) => (<li key={id} 
                className='equipement'>{equipement}</li>))}</ul>}/>
            </div>
        </div>
    );
};

export default FicheLogement;




