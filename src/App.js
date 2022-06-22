import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from './pages/Home';
import Marvel from './pages/Marvel';
import DC from './pages/DC';

function App() {
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<Home/>}/>
        <Route path="/Marvel" element={<Marvel/>}/>
        <Route path="/DC" element={<DC/>}/>

      </Routes>
    </Router>
  );
}

export default App;
