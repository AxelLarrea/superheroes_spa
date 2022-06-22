import React from 'react';
import { Link } from 'react-router-dom';

const IndividualCard = () => {
    return (
        <div className="card">
            <Link to="/" >
                <img src="chrome://branding/content/about-logo.png" alt="si"></img>
            </Link>
            <p>Nombre: </p>
            <p>Nombre personaje: </p>
            <p>Biografía: </p>
        </div>
    );
}

export default IndividualCard;