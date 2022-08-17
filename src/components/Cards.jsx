import React, { useEffect, useContext } from 'react';
import IndividualCard from './IndividualCard';
import { useLocation, Link } from "react-router-dom"
import { PjsContext } from './PjsProvider';


const Cards = () => {

    const personajes = useContext(PjsContext);
    const url = useLocation();

    let pjs2 = personajes.chars;

    const getPersonajes = async () => {
        const response = await fetch("http://localhost:4000/todos");
        const data = await response.json();
        personajes.setChars(data);
        personajes.setCharacters(data);
    };

    if (url.pathname === '/marvel'){
        pjs2 = personajes.chars.filter( pj => pj.casa === 'Marvel');
    } else if (url.pathname === '/dc'){
        pjs2 = personajes.chars.filter( pj => pj.casa === 'DC');
    }


    useEffect(() => {
        getPersonajes();
    }, []);


    return (
        <>
            <div className="main">
                <Link to="/agregar">
                    <button className="btn-add-pj">Agregar personaje</button>
                </Link>
                <div className="cards-container">
                    {
                        pjs2.map(card => {
                            return <IndividualCard
                                    key={card._id}
                                    card={card}
                                    />
                        })
                    }
                </div>
            </div>
        </>
    );
}
 
export default Cards;