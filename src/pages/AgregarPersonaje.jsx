import React from 'react';
import Header from '../components/Header';
import FormPj from '../components/FormPj';

const AgregarPersonaje = () => {
    return (
        <>
            <Header/>

            <div className="form-add-pj">
                <FormPj text="Agregar" pj=""/>
            </div>
        </>
    );
}
 
export default AgregarPersonaje;