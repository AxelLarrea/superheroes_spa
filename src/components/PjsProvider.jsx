import React, { useState } from 'react';

export const PjsContext = React.createContext({}); 

const PjsProvider = ({children}) => {

    const [chars, setChars] = useState([]);
    const [characters, setCharacters] = useState([]);
    const [alerta3, setAlerta3] = useState(false);
    const [editing, setEditing] = useState(false);
    
    return (
        <PjsContext.Provider value={{chars, setChars, characters, setCharacters, alerta3, setAlerta3, editing, setEditing}}>
            {children}
        </PjsContext.Provider>
    );
}
 
export default PjsProvider;