import { motion } from 'motion/react';
import { portfolioData } from '../data';

export default function Life() {
  const { lifeGallery } = portfolioData;

  return (
    <section id="life" className="py-24 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Life</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            Beyond school and making, I'm also a golfer and a cyclist. Golf taught me patience and strategic thinking — the same qualities I bring to engineering problems. Cycling keeps me grounded, giving me space to think away from the workbench. These aren't just hobbies; they're part of how I stay sharp and clear-headed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {lifeGallery.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-slate-100 dark:bg-slate-700 cursor-pointer"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="absolute bottom-0 left-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full backdrop-blur-sm mb-2">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-white font-display">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
