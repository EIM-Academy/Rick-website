import { motion } from 'motion/react';
import { Cpu, Code2, Briefcase } from 'lucide-react';
import { portfolioData } from '../data';

const domainConfig: Record<string, { icon: React.ReactNode; accent: string; bg: string; border: string }> = {
  hardware: {
    icon: <Cpu size={20} />,
    accent: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  software: {
    icon: <Code2 size={20} />,
    accent: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
  },
  business: {
    icon: <Briefcase size={20} />,
    accent: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
};

export default function Skills() {
  const { skillDomains } = portfolioData;

  return (
    <section id="skills" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4 tracking-tight">Skills & Training</h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Organized by domain — what I can build today, and what I'm actively developing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillDomains.map((domain, domainIdx) => {
            const config = domainConfig[domain.id] ?? domainConfig.hardware;
            return (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: domainIdx * 0.12 }}
                className="bg-white rounded-2xl border border-slate-200 p-7 flex flex-col gap-5"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl ${config.bg} ${config.accent}`}>
                    {config.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">{domain.name}</h3>
                </div>

                <div className="flex flex-col gap-2.5">
                  {domain.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: domainIdx * 0.12 + skillIdx * 0.07 }}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-xl border ${config.bg} ${config.border}`}
                    >
                      <span className="font-medium text-slate-800 text-sm">{skill.name}</span>
                      {skill.level === 'training' && (
                        <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 border border-amber-200">
                          Developing
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-8 text-sm text-slate-400 text-center">
          To add a new skill, drop it into the right domain in <code className="font-mono">data.ts</code> — it shows up here automatically.
        </p>

      </div>
    </section>
  );
}
