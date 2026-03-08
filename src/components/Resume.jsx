import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, FileText, ExternalLink } from 'lucide-react';

export default function Resume() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="resume" className="relative z-10 py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          className="flex items-center gap-4 mb-16"
          ref={ref}
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
        >
          <span className="tag">07</span>
          <h2 className="section-heading text-text">Resume</h2>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <a
            href="/resume.pdf"
            download="Athar_Shafi_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-bg transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #00d4ff, #0ea5e9)' }}
          >
            <Download size={16} />
            <span>Download Resume</span>
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-border font-medium text-text hover:border-accent/40 hover:text-accent transition-all duration-300"
          >
            <ExternalLink size={16} />
            <span>Open in New Tab</span>
          </a>
        </motion.div>

        <motion.div
          className="glass border border-border rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <FileText size={15} className="text-accent" />
              </div>
              <div>
                <p className="text-sm font-medium text-text">Athar_Shafi_Resume.pdf</p>
                <p className="font-mono text-xs text-muted">Click to interact with the PDF</p>
              </div>
            </div>
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
          </div>

          <div className="w-full" style={{ height: '80vh' }}>
            <iframe
              src="/resume.pdf"
              title="Athar Shafi Resume"
              className="w-full h-full"
              style={{ border: 'none', background: '#050810' }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}