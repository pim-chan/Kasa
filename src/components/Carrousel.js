import React, {useEffect, useState} from 'react';
import axios from 'axios';



const Carrousel = () => {;
    return (
        <div>
             {images.map((picture,id) => {
                <div key= {id} className="carrousel">
                    <img src={picture} alt={`photo ${id + 1}`} />
                </div>
             })}   
        </div>
    );
};

export default Carrousel;