import React, {useEffect, useState} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';


const Card = () => {
    const [dataLocations, setDataLocations] = useState([]);
    useEffect(() => {
        axios
          .get("https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json")
          .then((res) => setDataLocations(res.data));
      }, []);
    
    const renderCards = () => {
        const firstSixLocations = dataLocations.slice(0, 6);

        return firstSixLocations.map((location) => (
            <Link to='/fiche-logement' key={location.id} className="card" >
                <img src={location.cover} alt="photo location appartement" />
                <div className="card__overlay"></div>
                <h2>{location.title}</h2>
            </Link>
        ));
    };

    return (
        <div className="gallery">
            {renderCards()}
        </div>
    );
};

export default Card;