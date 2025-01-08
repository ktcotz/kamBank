import { GalleryImageI18NHandler } from './../../../../lib/i18n/i18n.types';

export type GalleryImage = {
  src: string;
  href: GalleryImageI18NHandler;
  width: number;
  height: number;
};

export const rootScrollGallery: GalleryImage[] = [
  {
    src: './images/santander.png',
    href: 'gallery.santander',
    width: 357,
    height: 128,
  },
  {
    src: './images/rest.png',
    href: 'gallery.rest',
    width: 128,
    height: 128,
  },
  {
    src: './images/mbank.png',
    href: 'gallery.mbank',
    width: 231,
    height: 128,
  },
  {
    src: './images/pko.png',
    href: 'gallery.pko',
    width: 106,
    height: 128,
  },
];
