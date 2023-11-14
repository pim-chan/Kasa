import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import DataLocations from '../assets/locations.json'
import Carrousel from '../components/Carrousel';
import Tags from '../components/Tags';
import Dropdown from '../components/Dropdown';
import Host from '../components/Host';
import Rating from '../components/Rating';

const LocationPage = () => {
    const idLocation = useParams('id').id; 
    
    const CurrentDataLocation = DataLocations.filter(item => item.id === idLocation);
    if (CurrentDataLocation.length === 0) {
        return <Navigate to="/error-404"/>;
    }

    const currentData = CurrentDataLocation[0]
    console.log(currentData);
    const equipements = currentData.equipments;
    const hostPhoto = currentData.host.picture;
    const hostName = currentData.host.name;
    const description = currentData.description;
    const tags = currentData.tags;
    const rating = currentData.rating;
    const pictures = currentData.pictures;

    return (
        <div>
            <Carrousel pictures={pictures}/>
            <div className="location-infos">
                <div className="title-tags__container">
                    <div className='lp__text'>
                    <h1 className='lp__title'>{currentData.title}</h1>
                    <h2 className='lp__localisation'>{currentData.location}</h2>
                </div>
                    <Tags tags={tags}/>
                </div>
                <div className="host-rating_container">
                    <Host hostPhoto={hostPhoto} hostName={hostName}/>
                    <Rating rating={rating}/>
                </div>
            </div>
            <div className="lp-dropdowns-container">
                <Dropdown className=" dropdown lp-dropdown" 
                title={"Description"} 
                dropdownText={description}
                />
                <Dropdown 
                className="dropdown lp-dropdown" 
                title={"Équipements"} 
                dropdownText={<ul>{equipements.map((equipement, id) => (<li key={id} 
                className='equipement'>{equipement}</li>))}</ul>}/>
            </div>
        </div>
    );
};

export default LocationPage;




