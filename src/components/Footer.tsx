import { Code2, Github, Mail } from 'lucide-react';
import { portfolioData } from '../data';

export default function Footer() {
  const { about } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-slate-950 py-16 text-slate-400 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">

        <div className="flex flex-col items-center md:items-start">
          <a href="#" className="flex items-center gap-2 mb-4">
            <div className="text-blue-500">
              <Code2 size={24} />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">
              Rick Wang
            </span>
          </a>
          <p className="text-sm max-w-sm text-center md:text-left">
            Always open to discussing new projects, biomedical innovation, or opportunities at the intersection of tech and business.
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/techyrick-wang?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-slate-900 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href={`mailto:${about.email}`}
            className="p-2.5 bg-slate-900 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {currentYear} {about.name}. All rights reserved.</p>
        <p className="text-slate-500">
          Designed for the intersection of tech &amp; business.
        </p>
      </div>
    </footer>
  );
}
