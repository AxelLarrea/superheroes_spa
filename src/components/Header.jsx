import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PjsContext } from './PjsProvider';

const Header = () => {

    const personajes = useContext(PjsContext);

    const handleInputChange = (e) =>{
        
        filtrar(e.target.value);
    }

    const filtrar = (search) => {
        let resultado = personajes.characters.filter( elemento => {
            if(elemento.nombre.toString().toLowerCase().includes(search.toLowerCase())
                || elemento.nombre_pj.toString().toLowerCase().includes(search.toLowerCase())
            ){
                return elemento;
            }
        });
        personajes.setChars(resultado);
    }

    return (
        <div className="header">
            <Link to="/">
                <h2>Superheroes SPA</h2>
            </Link>
            

            <div className="links">
                <Link to="/marvel">
                    Marvel
                </Link>

                <Link to="/dc">
                    DC
                </Link>
            </div>

            <div className="search-bar">
                <input type="text" placeholder="Nombre del personaje" onChange={handleInputChange}></input>
            </div>
        </div>
    );
}
 
export default Header;