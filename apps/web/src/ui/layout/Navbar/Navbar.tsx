import { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Wrapper } from '../../shared/ui/Wrapper';
import { NavbarList } from './NavbarList';
import { NavbarLogo } from './NavbarLogo';

type NavbarProps = {
  children: ReactNode;
};

export const Navbar = ({ children }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: 'Strona główna', href: '/' },
    { name: 'O nas', href: '/o-nas' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <nav className="bg-white shadow">
      <Wrapper className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {children}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600"
            >
              <span className="sr-only">Otwórz menu główne</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-100 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/demo"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
              onClick={toggleMenu}
            >
              Umów demo
            </Link>
          </div>
        </div>
      </Wrapper>
    </nav>
  );
};

Navbar.Logo = NavbarLogo;
Navbar.List = NavbarList;
