import { useTranslation } from 'react-i18next';
import { GalleryImage } from './data/data';
import { useScrollGallery } from './useScrollGallery';
import { useRef } from 'react';

type InfiniteScrollGalleryProps = {
  images: GalleryImage[];
};

export const InfiniteScrollGallery = ({
  images,
}: InfiniteScrollGalleryProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { t } = useTranslation();

  useScrollGallery(containerRef);

  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-4 animate-scrollMobile sm:animate-scroll whitespace-nowrap"
        ref={containerRef}
      >
        {[...images, ...images, ...images].map(
          ({ href, src, width, height }, index) => {
            return (
              <img
                src={src}
                key={index}
                alt={t(href)}
                width={width}
                height={height}
                className="h-20 md:h-32 object-cover rounded-ld grayscale hover:grayscale-0 transition-all"
              />
            );
          }
        )}
      </div>
    </div>
  );
};
