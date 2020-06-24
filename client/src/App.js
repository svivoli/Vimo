import React from 'react';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div>
      <Logo />
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
