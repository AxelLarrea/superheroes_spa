import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Aviso from './Aviso';

const FormPj = ({text, pj}) => {

    const location = useLocation();

    //Controlador para alerta
    const [alerta, setAlerta] = useState(false);

    const [personaje, setPersonaje] = useState({
        nombre: "",
        nombre_pj: "",
        casa: "",
        anio_aparicion: "",
        biografia: "",
        equipamiento: "",
        logo: "",
        urls: ""
    });

    const handleInputChange = (e) => {
        setPersonaje({ ...personaje, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (location.pathname === '/agregar'){
            //Verificamos si el personaje a agregar ya existe
            const response = await fetch(`http://localhost:4000/individual/${personaje.nombre_pj}`);
            const data = await response.json();
            setAlerta(true);
            
        } else{
            window.location.href = `/personaje/${pj}`;

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
                        <input type="text" id="nombre" name="nombre" placeholder="Nombre real" required value={personaje.nombre} onChange={handleInputChange}></input>
                        <input type="text" id="nombre_pj" name="nombre_pj" placeholder="Nombre del personaje" required value={personaje.nombre_pj} onChange={handleInputChange}></input>
                        <input type="text" id="casa" name="casa" placeholder="Casa perteneciente" required value={personaje.casa} onChange={handleInputChange}></input>
                    </div>

                    <div className="form-inputs">
                        <input type="text" id="anio_aparicion" name="anio_aparicion" placeholder="Año de aparición" required value={personaje.anio_aparicion} onChange={handleInputChange}></input>
                        <input type="text" id="biografia" name="biografia" placeholder="Biografía" required value={personaje.biografia} onChange={handleInputChange}></input>
                        <input type="text" id="equipamiento" name="equipamiento" placeholder="Equipamiento" required value={personaje.equipamiento} onChange={handleInputChange}></input>
                    </div>

                    <div className="form-inputs">
                        <input type="text" id="logo" name="logo" placeholder="Link de logo de la casa" required value={personaje.logo} onChange={handleInputChange}></input>
                        <input type="text" id="urls" name="urls" placeholder="Links imágenes del personaje" required value={personaje.urls} onChange={handleInputChange}></input>
                    </div>
                    <button className="btn-pj" type="submit">{text}</button>
                </form>
            </div>
            {alerta && <Aviso text='El personaje ya existe' alerta={alerta} setAlerta={setAlerta}/>}
        </>
    );
}
 
export default FormPj;