import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar, Globe, Briefcase } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

function StatCard({ icon: Icon, label, value, color }) {
  const [ref, inView] = useInView({ triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      className="glass-light border border-border rounded-2xl p-5 flex items-center gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4, borderColor: `${color}44` }}
    >
      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${color}15` }}>
        <Icon size={18} style={{ color }} />
      </div>
      <div>
        <p className="font-mono text-xs text-muted">{label}</p>
        <p className="font-display font-semibold text-sm text-text">{value}</p>
      </div>
    </motion.div>
  );
}

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="relative z-10 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          ref={ref}
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="tag">01</span>
          <h2 className="section-heading text-text">About Me</h2>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div>
            <motion.p
              className="text-lg text-text/90 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              {personalInfo.bio}
            </motion.p>
            <motion.p
              className="text-muted leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              Passionate about bridging the gap between elegant UI and robust systems architecture.
              Whether it's real-time GPS tracking on mobile or training predictive ML models — I love
              solving complex technical challenges with clean, maintainable code.
            </motion.p>

            {/* Research publications */}
            <motion.div
              className="mt-8 p-5 glass-light border border-border rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <p className="font-mono text-xs text-accent tracking-widest mb-3">RESEARCH PUBLICATIONS</p>
              {[
                { icon: '🌱', text: 'Plant Health Monitoring System using Machine Learning' },
                { icon: '🔐', text: 'Passwordless Login using Elliptic Curve Cryptographic Techniques (Blockchain)' },
              ].map((pub, i) => (
                <div key={i} className="flex items-start gap-3 py-2 border-b border-border last:border-0">
                  <span>{pub.icon}</span>
                  <p className="text-sm text-muted">{pub.text}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Stats grid */}
          <div>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <StatCard icon={MapPin} label="Location" value="Dubai, UAE" color="#00d4ff" />
              <StatCard icon={Briefcase} label="Status" value="Available" color="#10b981" />
              <StatCard icon={Calendar} label="Experience" value="3+ Years" color="#7c3aed" />
              <StatCard icon={Globe} label="Languages" value="EN / HI / UR" color="#f59e0b" />
            </div>

            {/* Visual card */}
            <motion.div
              className="relative rounded-3xl overflow-hidden glass border border-border p-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <div
                className="absolute inset-0 opacity-5"
                style={{ background: 'linear-gradient(135deg, #00d4ff, #7c3aed, #10b981)' }}
              />
              <p className="font-mono text-xs text-accent mb-4 tracking-widest">QUICK FACTS</p>
              {[
                { label: 'Nationality', value: 'Indian 🇮🇳' },
                { label: 'Visa', value: 'UAE Employment Visa' },
                { label: 'Education', value: "Master's in Computer Application" },
                { label: 'NGO', value: 'Volunteer — Educational Support' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-2.5 border-b border-border/50 last:border-0">
                  <span className="text-muted text-sm">{item.label}</span>
                  <span className="text-text text-sm font-medium">{item.value}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
