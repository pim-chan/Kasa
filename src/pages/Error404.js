import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div>
            <div className="text-error">
                <h1 className='text-error__title'>404</h1>
                <p className='text-error__subtitle'>Oups! La page que vous demandez n'existe pas.</p>
                <Link to='/' className="link-homepage">Retourner sur la page d’accueil</Link>
            </div>        
        </div>
    );
};

export default Error404;