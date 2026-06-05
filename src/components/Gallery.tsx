import { motion } from 'motion/react';
import { portfolioData } from '../data';

export default function Gallery() {
  const { gallery } = portfolioData;

  return (
    <section id="gallery" className="py-24 bg-slate-900 border-t border-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight">Making &amp; Building</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto md:mx-0">
            Snapshots from the workbench — circuits, 3D models, solder joints, and everything in between.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {gallery.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="group relative rounded-2xl overflow-hidden aspect-video bg-slate-800 cursor-pointer"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>

              <div className="absolute bottom-0 left-0 p-6 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-mono font-medium rounded-full border border-blue-500/30 mb-3 backdrop-blur-sm">
                  {item.category}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white font-display">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
