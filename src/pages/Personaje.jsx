import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Personaje = () => {

    const {nombre} = useParams();

    const [personaje, setPersonaje] = useState([]);
    

    const getPersonaje = async () => {
        try {
            const response = await fetch(`http://localhost:4000/individual/${nombre}`);
        const data = await response.json();
        setPersonaje(data[0]);
        } catch (error) {
            console.log(error);
        }
    };

    const {logo} = personaje;
    const {nombre_pj} = personaje;
    const {biografia} = personaje;
    const {urls} = personaje;

    useEffect(() => {
        getPersonaje();
    }, []);

    
    

    return (
        <>  
            <div className="">
                <div className="img-pj">
                    <img src={urls} alt="psj"></img>
                </div>
                
                <div className="info-container">
                    <h3>{nombre}</h3>
                    <h3>{nombre_pj}</h3>
                    <div className="logo">
                        <img src={logo} alt="img"></img>
                    </div>
                    <p>{biografia}</p>
                </div>
            </div>
        </>
    );
}
 
export default Personaje;