import React, { useState } from 'react';

export const PjsContext = React.createContext({}); 

const PjsProvider = ({children}) => {

    const [chars, setChars] = useState([]);
    const [characters, setCharacters] = useState([]);
    
    return (
        <PjsContext.Provider value={{chars, setChars, characters, setCharacters}}>
            {children}
        </PjsContext.Provider>
    );
}
 
export default PjsProvider;