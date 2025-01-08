import { render, screen } from '@testing-library/react';
import { NavbarTrapper } from './../NavbarTrapper';
import { describe, expect, test } from 'vitest';
import { NavbarContext } from '../context/NavbarContextProvider';

console.log(__dirname);

describe('Navbar Trapper testing component', () => {
  test('Should be div with children when no mobile menu is provided', () => {
    render(
      <NavbarContext.Provider
        value={{ isMenuOpen: false, toggleMenu: () => null }}
      >
        <NavbarTrapper>
          <h1>Should be visible without trap</h1>
        </NavbarTrapper>
      </NavbarContext.Provider>
    );

    const element = screen.getByRole('heading', {
      name: /Should be visible without trap/i,
    });

    expect(element.parentElement).toHaveClass('h-auto');
  });

  test('Should be focus trap when mobile menu is provided', () => {
    render(
      <NavbarContext.Provider
        value={{ isMenuOpen: true, toggleMenu: () => null }}
      >
        <NavbarTrapper>
          <button>Should be visible with trap</button>
        </NavbarTrapper>
      </NavbarContext.Provider>
    );

    const element = screen.getByRole('button', {
      name: /Should be visible with trap/i,
    });

    expect(element.parentElement).not.toHaveClass('h-auto');
  });
});
