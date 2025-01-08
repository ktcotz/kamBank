import { RefObject, useEffect } from 'react';

export const useScrollGallery = (
  containerRef: RefObject<HTMLDivElement>,
  speed = 1
) => {
  useEffect(() => {
    const wrapper = containerRef.current;

    if (!wrapper) return;

    const scrollWidth = wrapper.scrollWidth;

    const halfContainerScrollWidth = scrollWidth / 2;

    let animationId: number;

    const animateScroll = () => {
      wrapper.scrollLeft += speed;

      if (wrapper.scrollLeft >= halfContainerScrollWidth) {
        wrapper.scrollLeft -= halfContainerScrollWidth / 2;
      }

      animationId = requestAnimationFrame(animateScroll);
    };

    animationId = requestAnimationFrame(animateScroll);

    return () => cancelAnimationFrame(animationId);
  }, [containerRef, speed]);
};
