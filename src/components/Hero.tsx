import { motion } from 'motion/react';
import { ArrowRight, Code, Cpu, Target } from 'lucide-react';
import { portfolioData } from '../data';

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function Hero() {
  const { about } = portfolioData;

  const highlights = [
    { icon: <Cpu size={18} />, text: "Tech-Savvy Maker" },
    { icon: <Code size={18} />, text: "Embedded Systems" },
    { icon: <Target size={18} />, text: "Tech-Business Strategy" }
  ];

  return (
    <section id="about" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-6xl mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-medium text-sm mb-6 border border-blue-100 dark:border-blue-800">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            {about.role}
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6">
            Where <span className="text-blue-600 dark:text-blue-400">engineering</span> <br className="hidden md:block"/> meets business.
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            {about.bio}
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                <span className="text-blue-600 dark:text-blue-400">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="https://github.com/techyrick-wang?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600 rounded-full font-medium hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm">
              <GitHubIcon /> GitHub Profile
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative lg:ml-auto w-full max-w-md mx-auto lg:max-w-none"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 -translate-x-4 translate-y-4 bg-blue-100 dark:bg-blue-900/40 rounded-[2rem] -z-10"></div>
          <div className="absolute inset-0 translate-x-4 -translate-y-4 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-[2rem] -z-20"></div>

          <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all duration-500 hover:shadow-[0_0_50px_15px_rgba(59,130,246,0.7)] hover:border-blue-400">
            <img
              src="/Main Head Picture.jpg"
              alt="Rick"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6 pt-20">
              <p className="text-white font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                Currently building Bio-Kit — biomedical hardware
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
