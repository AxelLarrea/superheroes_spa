import React from 'react';
import { Link } from 'react-router-dom';

const IndividualCard = ({card}) => {

    const { nombre } = card;
    const { nombre_pj } = card;
    const { biografia } = card;
    const { urls } = card;
    return (
        <>
            <div className="card">
                <Link to="/" >
                    <img src={urls} alt="si"></img>
                </Link>
                
                { 
                    nombre !== nombre_pj ? <p>{nombre_pj} ({nombre})</p> : <p>{nombre}</p>
                }
                
                <p>{biografia}</p>
            </div>
        </>
    );
}

export default IndividualCard;