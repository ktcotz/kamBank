import { Link } from 'react-router-dom';
import { NavigationListItemsData } from './data/data';
import { ReactNode } from 'react';
import { Button } from '@./ui';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

type NavbarListProps<T extends NavigationListItemsData> = {
  items: T[];
  isMobileMenu?: boolean;
  children?: ReactNode;
};

export const NavbarList = <T extends NavigationListItemsData>({
  items,
  children,
  isMobileMenu,
}: NavbarListProps<T>) => {
  const { t } = useTranslation();

  return (
    <div
      className={clsx(
        isMobileMenu ? 'flex' : 'hidden',
        'flex-col gap-4  md:flex-row md:flex items-center'
      )}
    >
      {items.map(({ name, href }) => (
        <Button key={name} asChild variant="link">
          <Link to={href}>{t(name)}</Link>
        </Button>
      ))}
      {children}
    </div>
  );
};
