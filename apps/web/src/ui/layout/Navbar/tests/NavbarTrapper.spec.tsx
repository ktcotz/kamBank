import { render } from '@testing-library/react';
import { NavbarTrapper } from './../NavbarTrapper';
import { describe, test } from 'vitest';
import { NavbarContextProvider } from '../context/NavbarContextProvider';

describe('Navbar Trapper testing component', () => {
  test('Should be div with children when no mobile menu is provided', () => {
    render(
      <NavbarContextProvider>
        <NavbarTrapper>asd</NavbarTrapper>
      </NavbarContextProvider>
    );
  });
});
