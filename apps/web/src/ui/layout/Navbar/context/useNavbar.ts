import { useContext } from 'react';
import { NavbarContext } from './NavbarContextProvider';

export const useNavbar = () => {
  const context = useContext(NavbarContext);

  if (context === null) {
    throw new Error(
      "Can't using Navbar Context without his provider, try again with provider!"
    );
  }

  return context;
};
