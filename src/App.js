import React from "react";
import {Routes, Route} from 'react-router-dom';

import Home from './routes/Home';
import Contact from './routes/Contact';
import About from './routes/About';
import Interiors from './routes/Interiors';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/interiors' element={<Interiors />} />
      </Routes>
    </>
  );
}

export default App;
