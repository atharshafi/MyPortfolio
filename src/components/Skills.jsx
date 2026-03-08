import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/resumeData';
import { FadeUp } from '../animations/ScrollReveal';

const categories = [
  { key: 'mobile', label: 'Mobile', icon: '📱', color: '#00e5ff' },
  { key: 'frontend', label: 'Frontend', icon: '🎨', color: '#a78bfa' },
  { key: 'backend', label: 'Backend', icon: '⚙️', color: '#10b981' },
  { key: 'database', label: 'Database', icon: '🗄️', color: '#f59e0b' },
  { key: 'aiml', label: 'AI / ML', icon: '🤖', color: '#f43f5e' },
  { key: 'cloud', label: 'Cloud & Tools', icon: '☁️', color: '#06b6d4' },
];

function SkillBar({ name, level, color, delay = 0 }) {
  const [ref, inView] = useInView({ triggerOnce: true });
  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="font-body text-sm text-slate-text">{name}</span>
        <span className="font-mono text-xs" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1 bg-surface rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

const techStack = [
  'React Native', 'React.js', 'Angular', 'TypeScript', 'JavaScript',
  'C#', 'ASP.NET Core', 'Node.js', 'FastAPI', 'Python', 'Java',
  'SQL Server', 'PostgreSQL', 'MongoDB', 'MySQL',
  'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy',
  'AWS Rekognition', 'Docker', 'Git', 'Postman', 'Android Studio', 'Xcode',
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('mobile');
  const current = categories.find(c => c.key === activeCategory);
  const currentSkills = skills[activeCategory] || [];

  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <FadeUp className="text-center mb-20">
          <div className="section-tag mx-auto mb-6"><span>02</span> Skills</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-bright">Tech Expertise</h2>
          <div className="glow-line max-w-xs mx-auto mt-4" />
        </FadeUp>

        <FadeUp delay={0.1} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 text-sm font-mono flex items-center gap-2 transition-all duration-300 border ${
                activeCategory === cat.key ? 'text-void border-transparent' : 'text-slate-text border-border hover:border-slate-text/40'
              }`}
              style={activeCategory === cat.key ? { background: cat.color, borderColor: cat.color } : {}}
            >
              <span>{cat.icon}</span>{cat.label}
            </button>
          ))}
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-bright rounded-sm p-8 space-y-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{current?.icon}</span>
              <h3 className="font-display font-bold text-slate-bright text-xl">{current?.label} Skills</h3>
            </div>
            {currentSkills.map((skill, i) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} color={current?.color || '#00e5ff'} delay={i * 0.1} />
            ))}
          </motion.div>

          <motion.div
            key={`${activeCategory}-viz`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-bright rounded-sm p-8"
          >
            <h3 className="font-display font-bold text-slate-bright text-xl mb-6">Proficiency Overview</h3>
            <div className="grid grid-cols-1 gap-3">
              {currentSkills.map((skill, i) => (
                <div key={skill.name} className="flex items-center gap-4">
                  <div className="w-28 font-body text-xs text-slate-text/70 text-right flex-shrink-0 truncate">{skill.name.split(' ')[0]}</div>
                  <div className="flex gap-0.5 flex-1">
                    {Array.from({ length: 10 }).map((_, j) => {
                      const filled = j < Math.floor(skill.level / 10);
                      return (
                        <motion.div
                          key={j}
                          className="flex-1 h-4 rounded-sm"
                          style={{ background: filled ? `${current?.color || '#00e5ff'}${Math.round((0.4 + j * 0.06) * 255).toString(16).padStart(2, '0')}` : 'rgba(30,45,80,0.5)' }}
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ delay: i * 0.08 + j * 0.02 }}
                        />
                      );
                    })}
                  </div>
                  <div className="w-10 font-mono text-xs text-right flex-shrink-0" style={{ color: current?.color }}>{skill.level}%</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <FadeUp delay={0.3}>
          <div className="glass rounded-sm p-8">
            <h3 className="font-mono text-xs text-cyan-accent/60 tracking-widest uppercase mb-6">Full Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-mono text-slate-text border border-border hover:border-cyan-accent/40 hover:text-cyan-accent transition-all duration-200 cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  whileHover={{ y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
