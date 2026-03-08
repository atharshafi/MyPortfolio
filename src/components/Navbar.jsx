import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useScrollProgress, useActiveSection } from '../hooks/useScrollProgress';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const progress = useScrollProgress();
  const activeSection = useActiveSection(navLinks.map(l => l.id));
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-0.5 z-[100] bg-border">
        <motion.div
          className="h-full"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #00d4ff, #7c3aed)',
            boxShadow: '0 0 8px #00d4ff',
          }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <motion.nav
        className={`fixed top-1 left-0 right-0 z-50 px-6 py-4 transition-all duration-500 ${scrolled ? 'glass border-b border-border' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">

          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="group">
            <div className="w-10 h-10 rounded-xl glass border border-accent/30 flex items-center justify-center transition-all duration-300 group-hover:border-accent/60">
              <span className="font-display font-bold text-sm gradient-text">AS</span>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative px-4 py-2 font-body text-sm font-medium transition-all duration-300 rounded-lg ${
                  activeSection === link.id ? 'text-accent' : 'text-muted hover:text-text'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-lg bg-accent/10 border border-accent/20"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => navigate('/resume')}
              className="flex items-center gap-2 px-4 py-2 rounded-lg glass border border-border text-muted text-sm font-medium hover:border-accent/30 hover:text-text transition-all duration-300"
            >
              <FileText size={14} />
              <span>Resume</span>
            </button>
            <a
              href="mailto:atharshafi24@gmail.com"
              className="px-4 py-2 rounded-lg glass border border-accent/30 text-accent text-sm font-medium hover:bg-accent/10 hover:border-accent/60 transition-all duration-300"
            >
              Hire Me
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 glass border border-border rounded-xl flex items-center justify-center text-muted hover:text-text"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-bg/95 backdrop-blur-xl"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="relative z-10 flex flex-col items-center gap-4 pt-16"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
            >
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="font-display text-2xl font-bold text-text hover:text-accent transition-colors"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => { navigate('/resume'); setMobileOpen(false); }}
                className="font-display text-2xl font-bold text-accent hover:text-accent/70 transition-colors"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                Resume
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}