import { useScrollGallery } from './hooks/useScrollGallery';

type InfiniteScrollGalleryProps = {
  images: string[];
};

export const InfiniteScrollGallery = ({
  images,
}: InfiniteScrollGalleryProps) => {
  const { containerRef } = useScrollGallery();

  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-4 animate-scroll whitespace-nowrap"
        ref={containerRef}
      >
        {[...images, ...images].map((image, idx) => {
          return (
            <img
              src={image}
              key={idx}
              alt="a"
              className="h-32 object-cover rounded-ld shadow-md"
            />
          );
        })}
      </div>
    </div>
  );
};
