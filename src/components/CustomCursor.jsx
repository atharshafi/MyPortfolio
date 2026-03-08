import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let rafId;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX - 18) * 0.12;
      ringY += (mouseY - ringY - 18) * 0.12;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      rafId = requestAnimationFrame(animateRing);
    };

    const onEnter = () => ring.classList.add('hovering');
    const onLeave = () => ring.classList.remove('hovering');

    document.addEventListener('mousemove', moveCursor);

    const interactives = document.querySelectorAll('a, button, [data-hover]');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    rafId = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </>
  );
}
