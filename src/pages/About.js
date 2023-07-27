import React from 'react';
import Banner from '../components/Banner';
import Dropdown from '../components/Dropdown';
// import imgBanner from '../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png'

const About = () => {
    return (
        <div>
            <Banner backgroundImg='./img-montagne.png'/>
            <div className='dropdown-container'>
                <Dropdown title={"Flabilité"} dropdownText={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."}/>
                <Dropdown title={"Respect"} dropdownText={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}/>
                <Dropdown title={"Service"} dropdownText={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}/>
                <Dropdown title={"sécurité"} dropdownText={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}/>
            </div>
        </div>
    );
};

export default About;