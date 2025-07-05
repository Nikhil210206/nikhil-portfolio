import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Achievements from './pages/Achievements';
import Footer from './components/Footer';
import AnimatedCursor from './components/AnimatedCursor';

function App() {
  return (
    <Router>
      <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
        <AnimatedCursor />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <section id="home" className="snap-start"><Home /></section>
                <section id="about" className="snap-start"><About /></section>
                <section id="projects" className="snap-start"><Projects /></section>
                <section id="experience" className="snap-start"><Experience /></section>
                <section id="achievements" className="snap-start"><Achievements /></section>
                <Footer />
                <Analytics />
              </>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
