import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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
                <input type="text" placeholder="Nombre del personaje"></input>
            </div>
        </div>
    );
}
 
export default Header;