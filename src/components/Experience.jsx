import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar, Briefcase } from 'lucide-react';
import { experience } from '../data/resumeData';
import { FadeUp } from '../animations/ScrollReveal';

function TimelineItem({ exp, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`relative flex items-start gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'} mb-12`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Card */}
      <div className={`flex-1 ${isLeft ? 'text-left' : 'text-right'}`}>
        <div
          className="glass-bright rounded-sm p-6 group hover:shadow-card transition-all duration-300"
          style={{ borderColor: `${exp.color}25` }}
        >
          {/* Header */}
          <div className={`flex items-start gap-3 mb-4 ${isLeft ? '' : 'flex-row-reverse'}`}>
            <div
              className="w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-sm"
              style={{ background: `${exp.color}15`, border: `1px solid ${exp.color}30` }}
            >
              <Briefcase size={16} style={{ color: exp.color }} />
            </div>
            <div>
              <h3 className="font-display font-bold text-slate-bright text-lg leading-tight">{exp.title}</h3>
              <div className="font-body text-base font-medium mt-0.5" style={{ color: exp.color }}>{exp.company}</div>
            </div>
          </div>

          {/* Meta */}
          <div className={`flex flex-wrap gap-4 mb-4 text-xs font-mono text-slate-text/60 ${isLeft ? '' : 'justify-end'}`}>
            <span className="flex items-center gap-1.5">
              <Calendar size={11} /> {exp.period}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={11} /> {exp.location}
            </span>
            {exp.current && (
              <span className="px-2 py-0.5 text-emerald-accent border border-emerald-accent/30 bg-emerald-accent/10 rounded-sm">
                Current
              </span>
            )}
          </div>

          {exp.project && (
            <div className="mb-3 font-mono text-xs text-slate-text/50 italic">
              Project: {exp.project}
            </div>
          )}

          {/* Highlights */}
          <ul className={`space-y-2 mb-5 ${isLeft ? '' : 'text-right'}`}>
            {exp.highlights.map((h, i) => (
              <li key={i} className={`font-body text-sm text-slate-text/80 leading-relaxed flex gap-2 ${isLeft ? '' : 'flex-row-reverse'}`}>
                <span className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full" style={{ background: exp.color }} />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {/* Tech */}
          <div className={`flex flex-wrap gap-1.5 ${isLeft ? '' : 'justify-end'}`}>
            {exp.tech.map((t) => (
              <span key={t} className="px-2 py-0.5 text-[10px] font-mono border border-border/60 text-slate-text/50">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Center dot */}
      <div className="relative flex-shrink-0 w-5 flex items-center justify-center mt-6">
        <motion.div
          className="w-4 h-4 rounded-full border-2 z-10 relative"
          style={{ borderColor: exp.color, background: 'rgba(5,8,16,1)' }}
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          <div
            className="absolute inset-1 rounded-full"
            style={{ background: exp.color }}
          />
        </motion.div>
      </div>

      {/* Spacer for other side */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-cyan-accent/4 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto">
        <FadeUp className="text-center mb-20">
          <div className="section-tag mx-auto mb-6"><span>04</span> Experience</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-bright">Work History</h2>
          <div className="glow-line max-w-xs mx-auto mt-4" />
        </FadeUp>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block" style={{ background: 'linear-gradient(180deg, #00e5ff40, #7c3aed40, transparent)' }} />

          {/* Mobile: simple line on left */}
          <div className="absolute left-2 top-0 bottom-0 w-px md:hidden" style={{ background: 'linear-gradient(180deg, #00e5ff40, transparent)' }} />

          {experience.map((exp, i) => (
            <TimelineItem key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
