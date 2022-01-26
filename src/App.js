import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';

function App() {
  return (
    <>
    <Router>  
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/about/' element={<About />} />
      <Route exact path='/gallery/' element={<Gallery />} />
      <Route exact path='/contact/' element={<Contact />} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
