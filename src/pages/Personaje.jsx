import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const Personaje = () => {

    const param = useParams();

    const [personaje, setPersonaje] = useState([]);
    
    const {logo} = personaje;
    const {nombre_pj} = personaje;
    const {nombre} = personaje;
    const {biografia} = personaje;
    const {urls} = personaje;
    const {anio_aparicion} = personaje;
    const {equipamiento} = personaje;
    const {casa} = personaje;

    const getPersonaje = async () => {
        const response = await fetch(`http://localhost:4000/individual/${param.nombre}`);
        const data = await response.json();
        setPersonaje(data[0]);
    };

    
    useEffect(() => {
        getPersonaje();
    }, []);

    return (
        <>
            <Header/>
            <div className="detail-container">
                <div className="img-pj">
                    <img src={urls} alt="psj"></img>
                </div>
                
                <div className="info-container">
                    <div className="logo">
                        <img src={logo} alt="img"></img>
                    </div>
                    <div className="text">
                        <h3>Nombre real: {nombre}</h3>
                        <h3>Nombre de personaje: {nombre_pj}</h3>
                        <h3>Año de aparición: {anio_aparicion}</h3>
                        <h3>Equipamiento: {equipamiento}</h3>
                        <h3>Casa a la que pertenece: {casa}</h3>
                    </div>
                </div>
            </div>
            <h2 className="title">Biografía:</h2>
            <p className="biografia">{biografia}</p>
            <hr></hr>
        </>
    );
}
 
export default Personaje;