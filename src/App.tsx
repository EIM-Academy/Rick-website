import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Gallery from './components/Gallery';
import Life from './components/Life';
import Footer from './components/Footer';
import { SplashCursor } from './components/SplashCursor';

export default function App() {
  const [cursorEnabled, setCursorEnabled] = useState(() => {
    const saved = localStorage.getItem('cursorEffect');
    return saved !== null ? saved === 'true' : true;
  });

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved !== null ? saved === 'true' : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  function toggleCursor() {
    setCursorEnabled((prev) => {
      const next = !prev;
      localStorage.setItem('cursorEffect', String(next));
      return next;
    });
  }

  function toggleDark() {
    setDarkMode((prev) => {
      const next = !prev;
      localStorage.setItem('darkMode', String(next));
      return next;
    });
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      {cursorEnabled && <SplashCursor />}
      <Header
        cursorEnabled={cursorEnabled}
        onToggleCursor={toggleCursor}
        darkMode={darkMode}
        onToggleDark={toggleDark}
      />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Gallery />
        <Blog />
        <Life />
      </main>
      <Footer />
    </div>
  );
}
