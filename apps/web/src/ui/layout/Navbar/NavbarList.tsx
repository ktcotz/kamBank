import { Link } from 'react-router-dom';
import { NavigationListItemsData } from './data/data';
import { ReactNode } from 'react';
import { Button } from '@./ui';

type NavbarListProps<T extends NavigationListItemsData> = {
  items: T[];
  children?: ReactNode;
};

export const NavbarList = <T extends NavigationListItemsData>({
  items,
  children,
}: NavbarListProps<T>) => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      {items.map(({ name, href }) => (
        <Button key={name} asChild variant="link">
          <Link to={href}>{name}</Link>
        </Button>
      ))}
      {children}
    </div>
  );
};
