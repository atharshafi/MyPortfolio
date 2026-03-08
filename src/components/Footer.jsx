import { personalInfo } from '../data/resumeData';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-border py-12 px-6">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 border border-cyan-accent/30 flex items-center justify-center">
              <span className="font-display text-sm font-bold text-gradient-cyan">AS</span>
            </div>
            <div>
              <div className="font-display text-sm font-semibold text-slate-bright">Athar Shafi</div>
              <div className="font-mono text-[9px] text-slate-text/40 tracking-widest">SOFTWARE DEVELOPER · DUBAI, UAE</div>
            </div>
          </div>
          <div className="flex items-center gap-1 font-mono text-xs text-slate-text/40">
            Built with <Heart size={10} className="text-red-400 mx-1" /> React + Tailwind + Framer Motion
          </div>
          <div className="flex gap-4">
            {[
              { icon: Github, href: personalInfo.github },
              { icon: Linkedin, href: personalInfo.linkedin },
              { icon: Mail, href: `mailto:${personalInfo.email}` },
            ].map(({ icon: Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                className="text-slate-text/40 hover:text-cyan-accent transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div className="glow-line mt-8 opacity-30" />
        <p className="text-center font-mono text-xs text-slate-text/25 mt-6">
          © {new Date().getFullYear()} Athar Shafi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
