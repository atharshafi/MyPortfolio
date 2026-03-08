import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { education, certifications, publications } from '../data/resumeData';
import { FadeUp, StaggerChildren, StaggerItem } from '../animations/ScrollReveal';

export default function Education() {
  return (
    <section id="education" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeUp className="text-center mb-20">
          <div className="section-tag mx-auto mb-6"><span>05</span> Education</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-bright">Academic Background</h2>
          <div className="glow-line max-w-xs mx-auto mt-4" />
        </FadeUp>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            <h3 className="font-mono text-xs text-cyan-accent/60 uppercase tracking-widest mb-6 flex items-center gap-2">
              <GraduationCap size={14} /> Degrees
            </h3>
            <StaggerChildren staggerDelay={0.15}>
              {education.map((edu, i) => (
                <StaggerItem key={i}>
                  <div className="glass-bright rounded-sm p-6 card-lift" style={{ borderColor: `${edu.color}25` }}>
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-sm" style={{ background: `${edu.color}15`, border: `1px solid ${edu.color}30` }}>
                        <GraduationCap size={16} style={{ color: edu.color }} />
                      </div>
                      <div>
                        <div className="font-mono text-[10px] mb-1" style={{ color: edu.color }}>{edu.period}</div>
                        <h4 className="font-display font-bold text-slate-bright text-sm leading-tight">{edu.degree}</h4>
                      </div>
                    </div>
                    <div className="font-body text-sm text-slate-text/80">{edu.institution}</div>
                    <div className="font-mono text-xs text-slate-text/50 mt-1">{edu.location}</div>
                    <div className="mt-3 pt-3 border-t border-border">
                      {/* <span className="font-mono text-xs text-slate-text/50">CGPA: </span> */}
                      {/* <span className="font-mono text-sm font-bold" style={{ color: edu.color }}>{edu.cgpa}</span> */}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
          <div className="lg:col-span-1 space-y-4">
            <h3 className="font-mono text-xs text-cyan-accent/60 uppercase tracking-widest mb-6 flex items-center gap-2">
              <Award size={14} /> Certifications
            </h3>
            <StaggerChildren staggerDelay={0.12}>
              {certifications.map((cert, i) => (
                <StaggerItem key={i}>
                  <div className="glass-bright rounded-sm p-5 card-lift" style={{ borderColor: `${cert.color}25` }}>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-sm text-sm" style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}>🏆</div>
                      <div>
                        <h4 className="font-display font-semibold text-slate-bright text-sm leading-tight mb-1">{cert.title}</h4>
                        <div className="font-body text-xs text-slate-text/70">{cert.issuer}</div>
                        <div className="font-mono text-[10px] text-slate-text/40 mt-1">{cert.date}</div>
                        <div className="font-mono text-[10px] mt-1" style={{ color: cert.color + '80' }}>{cert.detail}</div>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
          <div className="lg:col-span-1 space-y-4">
            <h3 className="font-mono text-xs text-cyan-accent/60 uppercase tracking-widest mb-6 flex items-center gap-2">
              <BookOpen size={14} /> Research Publications
            </h3>
            <StaggerChildren staggerDelay={0.12}>
              {publications.map((pub, i) => (
                <StaggerItem key={i}>
                  <div className="glass-bright rounded-sm p-5 card-lift" style={{ borderColor: `${pub.color}25` }}>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-sm text-sm" style={{ background: `${pub.color}15`, border: `1px solid ${pub.color}30` }}>📄</div>
                      <div>
                        <div className="font-mono text-[10px] mb-1" style={{ color: pub.color }}>{pub.type}</div>
                        <p className="font-body text-sm text-slate-bright leading-snug">{pub.title}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
            <FadeUp delay={0.3}>
              <div className="glass rounded-sm p-5 mt-4">
                <h4 className="font-mono text-xs text-cyan-accent/60 uppercase tracking-widest mb-3">Extracurricular</h4>
                <div className="flex items-start gap-3">
                  <span className="text-lg">🤝</span>
                  <p className="font-body text-sm text-slate-text/80 leading-relaxed">Volunteered at an NGO, providing educational support to underprivileged children.</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
