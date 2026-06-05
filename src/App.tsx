import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Gallery from './components/Gallery';
import Life from './components/Life';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
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
