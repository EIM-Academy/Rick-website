import { motion } from 'motion/react';
import { ArrowRight, Github, Code, Cpu, Target } from 'lucide-react';
import { portfolioData } from '../data';

export default function Hero() {
  const { about } = portfolioData;

  const highlights = [
    { icon: <Cpu size={18} />, text: "Hardware Engineering" },
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 font-medium text-sm mb-6 border border-blue-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            {about.role}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Where <span className="text-blue-600">engineering</span> <br className="hidden md:block"/> meets business.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
            {about.bio}
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm font-medium text-slate-700 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                <span className="text-blue-600">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="https://github.com/techyrick-wang?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-full font-medium hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 transition-all shadow-sm">
              <Github size={18} /> GitHub Profile
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
          <div className="absolute inset-0 -translate-x-4 translate-y-4 bg-blue-100 rounded-[2rem] -z-10"></div>
          <div className="absolute inset-0 translate-x-4 -translate-y-4 bg-slate-100 border border-slate-200 rounded-[2rem] -z-20"></div>
          
          <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-xl bg-white border border-slate-200 transition-all duration-500 hover:shadow-[0_0_50px_15px_rgba(59,130,246,0.7)] hover:border-blue-400">
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
