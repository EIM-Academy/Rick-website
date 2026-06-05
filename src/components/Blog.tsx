import { motion } from 'motion/react';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { portfolioData } from '../data';

export default function Blog() {
  const { blog } = portfolioData;

  return (
    <section id="blog" className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Progress Blog &amp; Learning Journey</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              Honest write-ups on what I'm building, what I'm learning, and how I'm thinking about tech and business.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {blog.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-md hover:border-blue-200 dark:hover:border-blue-700 transition-all cursor-pointer"
            >
              <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white font-display group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <div className="flex md:flex-col lg:flex-row gap-3 md:gap-4 lg:gap-6 text-sm text-slate-500 dark:text-slate-400 font-medium shrink-0">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-slate-400 dark:text-slate-500" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-slate-400 dark:text-slate-500" />
                    {post.readTime}
                  </div>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                {post.excerpt}
              </p>

              <div className="mt-6 flex items-center text-blue-600 dark:text-blue-400 font-medium opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                Read article <ArrowRight size={16} className="ml-1" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
