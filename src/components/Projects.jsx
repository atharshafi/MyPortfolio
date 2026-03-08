import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, ArrowRight } from 'lucide-react';
import { projects } from '../data/resumeData';
import { FadeUp } from '../animations/ScrollReveal';

function ProjectModal({ project, onClose }) {
  return (
    <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div className="absolute inset-0 bg-void/90 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        className="relative glass-bright rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        style={{ border: `1px solid ${project.color}30` }}
        initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 30 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="p-8 border-b border-border">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center text-3xl rounded-sm" style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}>
                {project.icon}
              </div>
              <div>
                <div className="font-mono text-xs mb-1" style={{ color: project.color }}>{project.category}</div>
                <h3 className="font-display text-xl font-bold text-slate-bright">{project.title}</h3>
              </div>
            </div>
            <button onClick={onClose} className="text-slate-text hover:text-slate-bright transition-colors mt-1"><X size={20} /></button>
          </div>
        </div>
        <div className="p-8 space-y-6">
          <p className="font-body text-slate-text leading-relaxed">{project.longDescription}</p>
          <div>
            <h4 className="font-mono text-xs text-cyan-accent/60 uppercase tracking-widest mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 text-xs font-mono border" style={{ borderColor: `${project.color}30`, color: project.color + 'cc' }}>{t}</span>
              ))}
            </div>
          </div>
          <div className="flex gap-4 pt-2">
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border border-border text-slate-text hover:border-cyan-accent/40 hover:text-cyan-accent transition-all text-sm font-mono">
              <Github size={15} /> GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      className="relative glass-bright rounded-sm p-6 cursor-pointer group overflow-hidden"
      style={{ borderColor: `${project.color}20` }}
      onClick={() => onClick(project)}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at top left, ${project.color}08 0%, transparent 60%)` }} />
      {project.featured && (
        <div className="absolute top-4 right-4">
          <span className="font-mono text-[9px] px-2 py-0.5 rounded-sm" style={{ background: `${project.color}20`, color: project.color }}>FEATURED</span>
        </div>
      )}
      <div className="relative z-10 space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 flex items-center justify-center text-2xl flex-shrink-0 rounded-sm"
            style={{ background: `${project.color}15`, border: `1px solid ${project.color}25` }}>
            {project.icon}
          </div>
          <div>
            <div className="font-mono text-xs mb-1" style={{ color: project.color }}>{project.category}</div>
            <h3 className="font-display font-bold text-slate-bright text-base leading-tight">{project.title}</h3>
          </div>
        </div>
        <p className="font-body text-sm text-slate-text/80 leading-relaxed line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="px-2 py-0.5 text-[10px] font-mono border border-border/60 text-slate-text/60">{t}</span>
          ))}
          {project.tech.length > 4 && <span className="px-2 py-0.5 text-[10px] font-mono text-slate-text/40">+{project.tech.length - 4}</span>}
        </div>
        <div className="flex items-center justify-between pt-1">
          <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-slate-text/50 hover:text-cyan-accent transition-colors">
            <Github size={16} />
          </a>
          <span className="flex items-center gap-1.5 font-mono text-xs group-hover:gap-2.5 transition-all" style={{ color: project.color }}>
            View Details <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-violet-accent/5 rounded-full blur-[80px]" />
      </div>
      <div className="max-w-7xl mx-auto">
        <FadeUp className="text-center mb-16">
          <div className="section-tag mx-auto mb-6"><span>03</span> Projects</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-bright">Featured Work</h2>
          <div className="glow-line max-w-xs mx-auto mt-4" />
        </FadeUp>
        <FadeUp delay={0.1} className="flex flex-wrap justify-center gap-2 mb-12">
          {['All', 'Mobile', 'Full-Stack', 'AI'].map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs font-mono transition-all duration-200 border ${filter === cat ? 'bg-cyan-accent/10 border-cyan-accent/50 text-cyan-accent' : 'border-border text-slate-text/60 hover:border-border/80 hover:text-slate-text'}`}>
              {cat}
            </button>
          ))}
        </FadeUp>
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div key={project.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ delay: i * 0.08 }}>
                <ProjectCard project={project} onClick={setSelectedProject} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        <FadeUp delay={0.3} className="text-center mt-12">
          <a href="https://github.com/atharshafi" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-border text-slate-text hover:border-cyan-accent/50 hover:text-cyan-accent font-mono text-sm transition-all duration-200">
            <Github size={16} /> View All on GitHub
          </a>
        </FadeUp>
      </div>
      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </section>
  );
}
