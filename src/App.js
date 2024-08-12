import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import React from 'react';
import Projects from './Components/Projects';
import Form from './Components/Contact';
import LandingPage from './Components/LandingPage';

function App() {
  return (
    <div className="App">
      <LandingPage/>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Form />
      </section>
    </div>

  );
}

export default App;
