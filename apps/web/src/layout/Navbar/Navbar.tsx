import { ReactNode } from 'react';
import { Wrapper } from '../../features/ui';
import { NavbarList } from './NavbarList';
import { NavbarLogo } from './NavbarLogo';
import { NavbarHamburger } from './NavbarHamburger';
import { NavbarContextProvider } from './context/NavbarContextProvider';
import { NavbarMobileMenu } from './NavbarMobileMenu';
import { NavbarTrapper } from './NavbarTrapper';

type NavbarProps = {
  children: ReactNode;
};

export const Navbar = ({ children }: NavbarProps) => {
  return (
    <NavbarContextProvider>
      <nav className="bg-white shadow">
        <Wrapper className="px-4 sm:px-6 lg:px-8">{children}</Wrapper>
      </nav>
    </NavbarContextProvider>
  );
};

Navbar.Logo = NavbarLogo;
Navbar.List = NavbarList;
Navbar.Hamburger = NavbarHamburger;
Navbar.MobileMenu = NavbarMobileMenu;
Navbar.Trapper = NavbarTrapper;
