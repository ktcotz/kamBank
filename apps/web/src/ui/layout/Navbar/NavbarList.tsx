import { Link } from 'react-router-dom';
import { NavigationListItemsData } from './data/data';
import { ReactNode } from 'react';
import { Button } from '@./ui';
import { useTranslation } from 'react-i18next';

type NavbarListProps<T extends NavigationListItemsData> = {
  items: T[];
  children?: ReactNode;
};

export const NavbarList = <T extends NavigationListItemsData>({
  items,
  children,
}: NavbarListProps<T>) => {
  const { t } = useTranslation();
  return (
    <div className="hidden md:flex items-center space-x-4">
      {items.map(({ name, href }) => (
        <Button key={name} asChild variant="link">
          <Link to={href}>{t(name)}</Link>
        </Button>
      ))}
      {children}
    </div>
  );
};
