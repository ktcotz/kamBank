import { ReactNode } from 'react';
import { useNavbar } from './context/useNavbar';
import { FocusTrap } from 'focus-trap-react';

type NavbarTrapperProps = {
  children: ReactNode;
};

export const NavbarTrapper = ({ children }: NavbarTrapperProps) => {
  const { isMenuOpen } = useNavbar();

  if (isMenuOpen) {
    return (
      <FocusTrap>
        <div>{children}</div>
      </FocusTrap>
    );
  }

  return <div className="h-auto">{children}</div>;
};
