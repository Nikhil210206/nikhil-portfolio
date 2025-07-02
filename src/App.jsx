import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Achievements from './pages/Achievements';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AnimatedCursor from './components/AnimatedCursor';

function App() {
  return (
    <Router>
      <AnimatedCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <About />
            <Projects />
            <Experience />
            <Achievements />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}



export default App;
