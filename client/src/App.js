import React from 'react';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Credentials from './components/Credentials';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div>
      <Logo />
      <Navbar />
      <Hero />
      <About />
      <Credentials />
      <Contact />
    </div>
  );
}

export default App;
