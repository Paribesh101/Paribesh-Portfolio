import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import routing components
import Contact from './Contact';
import Home from './Home';
import About from './About';
import Info from './Info';

function App() {
  return (
    <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path = "/about" element={<About/>}/>
      <Route path = "/contact" element={<Contact/>}/>
      <Route path = "/info" element={<Info/>}/>
    </Routes>

  );
}

export default App;
