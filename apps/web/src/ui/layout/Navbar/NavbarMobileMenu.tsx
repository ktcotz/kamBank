import { ReactNode } from 'react';
import { useNavbar } from './context/useNavbar';
import clsx from 'clsx';

type NavbarMobileMenuProps = {
  children: ReactNode;
};

export const NavbarMobileMenu = ({ children }: NavbarMobileMenuProps) => {
  const { isMenuOpen } = useNavbar();

  return (
    <div
      className={clsx('md:hidden', isMenuOpen ? 'block' : 'hidden')}
      id="mobile-menu"
    >
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">{children}</div>
    </div>
  );
};
