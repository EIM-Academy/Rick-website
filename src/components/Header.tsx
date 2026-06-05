import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';
import { Menu, X, Sparkles, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  cursorEnabled: boolean;
  onToggleCursor: () => void;
  darkMode: boolean;
  onToggleDark: () => void;
}

export default function Header({ cursorEnabled, onToggleCursor, darkMode, onToggleDark }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Life', href: '#life' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg overflow-hidden">
            <img src="/icon.png" alt="Rick Wang logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            Rick Wang
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* Dark mode toggle */}
          <button
            onClick={onToggleDark}
            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Cursor effect toggle */}
          <button
            onClick={onToggleCursor}
            title={cursorEnabled ? 'Disable cursor effect' : 'Enable cursor effect'}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition-colors ${
              cursorEnabled
                ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/60'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Sparkles size={15} />
            {cursorEnabled ? 'FX: ON' : 'FX: OFF'}
          </button>

          <a
            href="#contact"
            className="px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium rounded-full hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white transition-colors"
          >
            Get in touch
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 py-4 px-6 shadow-lg"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {link.name}
              </a>
            ))}

            {/* Dark mode toggle (mobile) */}
            <button
              onClick={onToggleDark}
              className="flex items-center gap-2 w-full px-5 py-3 text-sm font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              {darkMode ? <Sun size={15} /> : <Moon size={15} />}
              {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>

            {/* Cursor toggle (mobile) */}
            <button
              onClick={onToggleCursor}
              className={`flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-medium rounded-lg transition-colors ${
                cursorEnabled
                  ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 hover:bg-blue-200'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-400 hover:bg-slate-200'
              }`}
            >
              <Sparkles size={15} />
              {cursorEnabled ? 'Cursor Effect: ON' : 'Cursor Effect: OFF'}
            </button>

            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center px-5 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium rounded-lg hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white mt-2 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
