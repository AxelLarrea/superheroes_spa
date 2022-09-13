import React from 'react';

const Aviso = ({text, alerta, setAlerta, editing, setEditing}) => {

    const handleClick = () => {
        setAlerta(!alerta);
        if(editing){
            setEditing(!editing);
            window.location.reload();
        }else{
            window.location.href = '/';
        };
    };

    return (
        <>
            <div className="back-aviso">
                <div className="aviso-container">
                    {text}
                    <button className="btn-pj" onClick={handleClick}>Aceptar</button>
                </div>
            </div>
        </>
    );
}
 
export default Aviso;