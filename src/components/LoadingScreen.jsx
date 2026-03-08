import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + Math.random() * 12 + 3;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  const p = Math.min(progress, 100);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bg"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Animated logo */}
      <motion.div
        className="mb-12 relative"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="w-20 h-20 rounded-2xl glass border border-accent/30 flex items-center justify-center glow">
          <span className="font-display font-bold text-3xl gradient-text">AS</span>
        </div>
        <div className="absolute -inset-2 rounded-3xl border border-accent/10 animate-ping" style={{ animationDuration: '2s' }} />
      </motion.div>

      {/* Name */}
      <motion.p
        className="font-display text-2xl font-bold text-text mb-1 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Athar Shafi
      </motion.p>
      <motion.p
        className="font-mono text-xs text-muted tracking-widest mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        SOFTWARE DEVELOPER
      </motion.p>

      {/* Progress bar */}
      <motion.div
        className="w-64 h-0.5 bg-border rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{
            background: 'linear-gradient(90deg, #00d4ff, #7c3aed)',
            width: `${p}%`,
            transition: 'width 0.1s ease',
            boxShadow: '0 0 10px #00d4ff88',
          }}
        />
      </motion.div>

      <motion.p
        className="font-mono text-xs text-muted mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {Math.round(p)}%
      </motion.p>
    </motion.div>
  );
}
