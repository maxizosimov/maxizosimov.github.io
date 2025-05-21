import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import NeuralBackground from './components/NeuralBackground';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  // Update document title
  useEffect(() => {
    document.title = "Maxim Izosimov | AI Developer & ML Engineer";
  }, []);

  return (
    <ThemeProvider>
      <div className="relative flex flex-col min-h-screen">
        <Navbar />
        <NeuralBackground />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;