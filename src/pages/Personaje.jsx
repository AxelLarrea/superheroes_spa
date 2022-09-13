import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import FormPj from '../components/FormPj';
import Header from '../components/Header';
import Carrousel from '../components/Carrousel';
import Aviso from '../components/Aviso';
import { PjsContext } from '../components/PjsProvider';

const Personaje = () => {

    const alert = useContext(PjsContext);

    const param = useParams();

    const [personaje, setPersonaje] = useState({});

    //Controlar alerta
    const [alerta, setAlerta] = useState(false);

    //Controlar si está editando un personaje
    const [form, setForm] = useState(false);
    
    const {logo} = personaje;
    const {nombre_pj} = personaje;
    const {nombre} = personaje;
    const {biografia} = personaje;
    const {anio_aparicion} = personaje;
    const {equipamiento} = personaje;
    const {casa} = personaje;
    const {urls} = personaje;


    //Controlador click botón eliminar
    const handleClickEliminar = async () => {
        setAlerta(true);
        await fetch(`http://localhost:4000/eliminar/${nombre_pj}`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        });
    }

    console.log('Links imagenes:', urls);
    
    useEffect(() => {
        const getPersonaje = async () => {
            const response = await fetch(`http://localhost:4000/individual/${param.nombre}`);
            const data = await response.json();
            setPersonaje(data[0]);
        };

        getPersonaje();
    }, [param.nombre]);

    return (
        <>
            <Header/>

            {alerta && <Aviso text='Personaje eliminado con exito' alerta={alerta} setAlerta={setAlerta}/>}
            {alert.alerta3 && <Aviso text='Personaje editado con exito' alerta={alert.alerta3} setAlerta={alert.setAlerta3} editing={!alert.editing} setEditing={alert.setEditing}/>}
            
            <div className="detail-container">
                <div className="img-pj">
                    <Carrousel/>
                    <div className="buttons-container">
                        <button className="btn-pj" onClick={() => setForm(!form)}>Editar</button>
                        <button className="btn-pj" onClick={handleClickEliminar}>Eliminar</button>
                    </div>
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

                {form && <FormPj text="Editar" pj={param.nombre} form={form} setForm={setForm}/>}
            </div>
            
            <h2 className="title">Biografía:</h2>
            <p className="biografia">{biografia}</p>
            <hr></hr>
        </>
    );
}
 
export default Personaje;