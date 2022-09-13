import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Aviso from './Aviso';
import { PjsContext } from './PjsProvider';


const FormPj = ({text, pj}) => {
    
    const alert = useContext(PjsContext);
    const location = useLocation();

    //Controlador de alertas
    const [alerta, setAlerta] = useState(false);
    const [alerta2, setAlerta2] = useState(false);
    const [editing, setEditing] = useState(false);

    const [personaje, setPersonaje] = useState({
        nombre: "",
        nombre_pj: "",
        casa: "",
        anio_aparicion: "",
        biografia: "",
        equipamiento: "",
        logo: "",
        urls: []
    });

    const handleInputChange = (e) => {
        setPersonaje({ ...personaje, [e.target.name]: e.target.value });

    };

    const urlsHandlerChange = (e) => {
        console.log('first', e.target.value)
        personaje.urls.pop();
        personaje.urls.push(e.target.value);
        console.log('object', personaje.urls);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (location.pathname === '/agregar'){
            //Verificamos si el personaje a agregar ya existe
            const response = await fetch(`http://localhost:4000/individual/${personaje.nombre_pj}`);
            const data = await response.json();
            console.log(data[0]);

            if (data[0] !== undefined){
                setAlerta(true);
            } else{
                setAlerta2(true);
                await fetch(`http://localhost:4000/agregar`,{
                    method: "POST",
                    body: JSON.stringify(personaje),
                    headers: {"Content-Type": "application/json"}
                });
            }

        } else{
            setEditing(true);
            alert.setAlerta3(true);
            await fetch(`http://localhost:4000/actualizar/${pj}`,{
                method: "PUT",
                body: JSON.stringify(personaje),
                headers: {"Content-Type": "application/json"}
            });
            
        };
    };

    
    useEffect(() => {

        if(location.pathname !== '/agregar'){
            const getPersonaje = async () => {
                const response = await fetch(`http://localhost:4000/individual/${pj}`);
                const data = await response.json();
                setPersonaje(data[0]);
            };
            getPersonaje();
        }
    }, [pj, location]);

    return (
        <>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-inputs">
                        <div>
                            <label>Nombre real</label>
                            <input type="text" id="nombre" name="nombre" placeholder="Nombre real" required value={personaje.nombre} onChange={handleInputChange}></input>
                        </div>
                        
                        <div>
                            <label>Nombre del personaje</label>
                            <input type="text" id="nombre_pj" name="nombre_pj" placeholder="Nombre del personaje" required value={personaje.nombre_pj} onChange={handleInputChange}></input>
                        </div>
                        
                        <div>
                            <label>Casa perteneciente</label>
                            <input type="text" id="casa" name="casa" placeholder="Casa perteneciente" required value={personaje.casa} onChange={handleInputChange}></input>
                        </div>
                        
                    </div>

                    <div className="form-inputs">
                        <div>
                            <label>Año de aparación</label>
                            <input type="text" id="anio_aparicion" name="anio_aparicion" placeholder="Año de aparición" required value={personaje.anio_aparicion} onChange={handleInputChange}></input>
                        </div>
                        
                        <div>
                            <label>Biografía</label>
                            <input type="text" id="biografia" name="biografia" placeholder="Biografía" required value={personaje.biografia} onChange={handleInputChange}></input>
                        </div>
                        
                        <div>
                            <label>Equipamiento</label>
                            <input type="text" id="equipamiento" name="equipamiento" placeholder="Equipamiento" required value={personaje.equipamiento} onChange={handleInputChange}></input>
                        </div>
                    </div>

                    <div className="form-inputs">
                        <div>
                            <label>Link de logo de la casa</label>
                            <input type="text" id="logo" name="logo" placeholder="Link de logo de la casa" required value={personaje.logo} onChange={handleInputChange}></input>
                        </div>
                        
                        <div>
                            <label>Link imágen</label>
                            <input type="text" id="urls" name="urls" placeholder="Link imágen del personaje" required value={personaje.urls} onChange={urlsHandlerChange}></input>
                        </div>
                    </div>
                    <button className="btn-pj" type="submit">{text}</button>
                </form>
            </div>
            {alerta && <Aviso text='El personaje ya existe' alerta={alerta} setAlerta={setAlerta} editing={editing} setEditing={setEditing}/>}
            {alerta2 && <Aviso text='Personaje agregado con exito' alerta={alerta2} setAlerta={setAlerta2} editing={editing} setEditing={setEditing}/>}
        </>
    );
}

export default FormPj;