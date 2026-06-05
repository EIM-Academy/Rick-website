import { motion } from 'motion/react';
import { ExternalLink, AlertTriangle } from 'lucide-react';
import { portfolioData } from '../data';

const statusDot: Record<string, string> = {
  completed: 'bg-blue-500',
  current:   'bg-green-400',
  revised:   'bg-amber-400',
};

export default function Projects() {
  const { projects, bioKitJourney } = portfolioData;
  const featured = projects.find(p => p.featured);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Hero card — already dark, unchanged */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-900 text-white mb-20"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(59,130,246,0.15),_transparent_60%)]" />
            <div className="relative p-8 md:p-14">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-300 font-mono text-xs font-medium border border-blue-500/30 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
                </span>
                Featured Project · In Progress · 2026
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">Bio-Kit</h2>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mb-8">
                {featured.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {featured.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-white/10 border border-white/10 rounded-full text-sm font-medium text-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Journey timeline */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white mb-2 tracking-tight">Development Journey</h3>
          <p className="text-slate-500 dark:text-slate-400">A running log of every build phase — including designs that didn't make the cut and why.</p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700" />

          <div className="flex flex-col gap-10">
            {bioKitJourney.map((entry, idx) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative pl-12 md:pl-16"
              >
                <div className={`absolute left-2.5 md:left-4 top-1.5 w-3 h-3 rounded-full border-2 border-white dark:border-slate-800 ring-2 ${statusDot[entry.status]} ${entry.status === 'current' ? 'ring-green-400' : 'ring-slate-200 dark:ring-slate-600'}`}>
                  {entry.status === 'current' && (
                    <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
                  )}
                </div>

                <div className="bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-2xl overflow-hidden hover:shadow-md dark:hover:shadow-slate-900/50 transition-shadow">
                  <div className="px-6 pt-6 pb-4 border-b border-slate-100 dark:border-slate-600">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="font-mono text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{entry.phase}</span>
                      <span className="text-slate-300 dark:text-slate-600">·</span>
                      <span className="font-mono text-xs text-slate-400 dark:text-slate-500">{entry.date}</span>
                      {entry.status === 'current' && (
                        <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full border border-green-200 dark:border-green-700">Current</span>
                      )}
                      {entry.status === 'revised' && (
                        <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 text-xs font-semibold rounded-full border border-amber-200 dark:border-amber-700">Design Revised</span>
                      )}
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white font-display">{entry.title}</h4>
                  </div>

                  <div className="px-6 py-5 flex flex-col gap-5">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{entry.description}</p>

                    {entry.images && entry.images.length > 0 && (
                      <div className="grid grid-cols-2 gap-3">
                        {entry.images.map((src, i) => (
                          <div key={i} className="rounded-xl overflow-hidden aspect-video bg-slate-100 dark:bg-slate-600">
                            <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                          </div>
                        ))}
                      </div>
                    )}

                    {entry.links && entry.links.length > 0 && (
                      <div className="flex flex-wrap gap-3">
                        {entry.links.map(link => (
                          <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-100 dark:bg-slate-600 hover:bg-blue-600 hover:text-white text-slate-700 dark:text-slate-200 text-sm font-medium rounded-full border border-slate-200 dark:border-slate-500 hover:border-blue-600 transition-all"
                          >
                            <ExternalLink size={14} /> {link.label}
                          </a>
                        ))}
                      </div>
                    )}

                    {entry.revisionNote && (
                      <div className="flex gap-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
                        <AlertTriangle size={16} className="text-amber-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wide mb-1">Why this design was changed</p>
                          <p className="text-sm text-amber-900 dark:text-amber-300 leading-relaxed">{entry.revisionNote}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
