import { createContext, ReactNode, useState } from 'react';

type NavbarContextState = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

export const NavbarContext = createContext<NavbarContextState | null>(null);

export const NavbarContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevOpenMenuState) => !prevOpenMenuState);
  };

  return (
    <NavbarContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </NavbarContext.Provider>
  );
};
