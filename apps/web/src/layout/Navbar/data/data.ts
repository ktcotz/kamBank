import { NavigationI18NHandler } from './../../../lib/i18n/i18n.types';
import { GlobalRoutes } from './../../../shared/types/types';

export type NavigationListItemsData = {
  name: NavigationI18NHandler;
  href: GlobalRoutes;
};

export const rootPageLayoutLinks: NavigationListItemsData[] = [
  {
    name: 'navigation.home',
    href: GlobalRoutes.Home,
  },
  {
    name: 'navigation.about',
    href: GlobalRoutes.Home,
  },
  {
    name: 'navigation.contact',
    href: GlobalRoutes.Home,
  },
];
