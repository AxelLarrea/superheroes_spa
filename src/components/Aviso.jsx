import React from 'react'

const Aviso = ({text, alerta, setAlerta}) => {
    return (
        <>
            <div className="back-aviso">
                <div className="aviso-container">
                    {text}
                    <button className="btn-pj" onClick={() => setAlerta(!alerta)}>Aceptar</button>
                </div>
            </div>
        </>
    );
}
 
export default Aviso;