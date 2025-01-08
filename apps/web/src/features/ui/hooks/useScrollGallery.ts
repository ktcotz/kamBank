import { useEffect, useRef } from 'react';

export const useScrollGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = containerRef.current;

    if (!wrapper) return;

    const scrollWidth = wrapper.scrollWidth;
    let animationId: number;

    const animateScroll = () => {
      wrapper.scrollLeft += 1; // Szybkość przewijania

      if (wrapper.scrollLeft >= scrollWidth / 2) {
        wrapper.scrollLeft -= scrollWidth / 2;
      }

      animationId = requestAnimationFrame(animateScroll);
    };

    animationId = requestAnimationFrame(animateScroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return { containerRef } as const;
};
