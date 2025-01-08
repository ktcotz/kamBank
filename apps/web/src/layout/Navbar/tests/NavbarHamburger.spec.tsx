import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './../../../../lib/i18n/i18n';
import { NavbarHamburger } from '../NavbarHamburger';
import {
  NavbarContext,
  NavbarContextProvider,
} from '../context/NavbarContextProvider';
import { userEvent } from '@testing-library/user-event';

const renderWithProviders = (item: JSX.Element) => {
  return render(item, {
    wrapper: ({ children }) => {
      return (
        <BrowserRouter>
          <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
        </BrowserRouter>
      );
    },
  });
};

describe('Navbar Hamburger testing component', () => {
  test('Should be correctly accessible when not open', () => {
    renderWithProviders(
      <NavbarContextProvider>
        <NavbarHamburger />
      </NavbarContextProvider>
    );

    const hamburgerButton = screen.getByRole('button');

    const controls = hamburgerButton.getAttribute('aria-controls');
    const label = hamburgerButton.getAttribute('aria-label');

    expect(controls).toBe('mobile-menu');
    expect(label).toBe('Otwórz menu główne');
  });
  test('Should be correctly accessible when is open', () => {
    renderWithProviders(
      <NavbarContext.Provider
        value={{ isMenuOpen: true, toggleMenu: () => null }}
      >
        <NavbarHamburger />
      </NavbarContext.Provider>
    );

    const hamburgerButton = screen.getByRole('button');

    const controls = hamburgerButton.getAttribute('aria-controls');
    const label = hamburgerButton.getAttribute('aria-label');

    expect(controls).toBe('mobile-menu');
    expect(label).toBe('Zamknij menu główne');
  });
});
