import { GlobalRoutes } from './../../../shared/types/types';

export type NavigationListItemsData = {
  name: string;
  href: GlobalRoutes;
};

export const rootPageLayoutLinks: NavigationListItemsData[] = [
  {
    name: 'Strona główna',
    href: GlobalRoutes.Home,
  },
  {
    name: 'O nas',
    href: GlobalRoutes.Home,
  },
  {
    name: 'Kontakt',
    href: GlobalRoutes.Home,
  },
];
