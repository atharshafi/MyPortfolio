import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Radial glow background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #00d4ff33 0%, #7c3aed11 50%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #7c3aed33 0%, transparent 70%)' }}
        />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-30 z-0" />

      {/* Animated orbit rings */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        {[300, 450, 600].map((size, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-accent/5"
            style={{
              width: size, height: size,
              animation: `spin ${20 + i * 8}s linear infinite ${i % 2 === 0 ? '' : 'reverse'}`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="tag">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse mr-1.5" />
              Available for Opportunities
            </span>
            <span className="tag" style={{ color: '#10b981', borderColor: '#10b98133', background: '#10b98108' }}>
              Dubai, UAE
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="font-display font-bold leading-none mb-4 tracking-tight"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-text">Athar </span>
            <span className="gradient-text">Shafi</span>
          </motion.h1>

          {/* Animated role */}
          <motion.div
            className="font-display font-medium text-muted mb-6 flex items-center gap-3"
            style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="text-accent">›</span>
            <TypeAnimation
              sequence={[
                'Software Developer',
                2000,
                'React Native Engineer',
                2000,
                'Full-Stack Developer',
                2000,
                'AI/ML Practitioner',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          {/* Bio */}
          <motion.p
            className="font-body text-muted max-w-2xl text-lg leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Building production-grade mobile & web platforms with{' '}
            <span className="text-accent">React Native</span>,{' '}
            <span className="text-purple-400">Angular</span>, and{' '}
            <span className="text-emerald-400">ASP.NET</span>.
            Specializing in real-time GPS tracking, face recognition, and AI-driven systems.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4 mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-bg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_#00d4ff44]"
              style={{ background: 'linear-gradient(135deg, #00d4ff, #0ea5e9)' }}
            >
              View Projects
              <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <a
              href="mailto:atharshafi24@gmail.com"
              className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-border font-medium text-text hover:border-accent/40 hover:text-accent transition-all duration-300"
            >
              <Mail size={16} />
              Get in Touch
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span className="font-mono text-xs text-muted tracking-widest">FIND ME ON</span>
            <div className="flex gap-4">
              {[
                { icon: Github, href: personalInfo.github, label: 'GitHub' },
                { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass border border-border rounded-xl flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="font-mono text-xs text-muted tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} className="text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
