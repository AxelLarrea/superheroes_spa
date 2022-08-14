import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from './pages/Home';
import Marvel from './pages/Marvel';
import DC from './pages/DC';
import Personaje from './pages/Personaje';
import PjsProvider from './components/PjsProvider';

function App() {
  return (
    <PjsProvider>
      <Router>
        <Routes>
        
          <Route path="/" element={<Home/>}/>
          <Route path="/Marvel" element={<Marvel/>}/>
          <Route path="/DC" element={<DC/>}/>
          <Route path="/personaje/:nombre" element={<Personaje/>}/>

        </Routes>
      </Router>
    </PjsProvider>
  );
}

export default App;
