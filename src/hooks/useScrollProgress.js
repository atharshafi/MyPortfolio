import { useState, useEffect } from 'react';

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((window.scrollY / totalHeight) * 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return progress;
};

export const useActiveSection = (sections) => {
  const [activeSection, setActiveSection] = useState('');
  useEffect(() => {
    const observers = sections.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-40% 0px -40% 0px' }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach(o => o && o.disconnect());
  }, [sections]);
  return activeSection;
};
