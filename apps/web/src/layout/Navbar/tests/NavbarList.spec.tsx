import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { NavbarList } from '../NavbarList';
import { rootPageLayoutLinks } from '../data/data';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './../../../../lib/i18n/i18n';

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

describe('Navbar List testing component', () => {
  test('Should correctly render links via props and hidden when is not mobile menu', () => {
    renderWithProviders(<NavbarList items={rootPageLayoutLinks} />);

    const linksHref = screen
      .getAllByRole('link')
      .map((link) => link.getAttribute('href'));

    const providedLinksContents = rootPageLayoutLinks.map((link) => link.href);

    const parentElement = screen.getByText(/Strona główna/i).parentElement;

    expect(linksHref).toEqual(providedLinksContents);
    expect(parentElement).toHaveClass('hidden');
  });

  test('Should correctly render links via props and flex when is mobile menu', () => {
    renderWithProviders(
      <NavbarList items={rootPageLayoutLinks} isMobileMenu={true} />
    );

    const linksHref = screen
      .getAllByRole('link')
      .map((link) => link.getAttribute('href'));

    const providedLinksContents = rootPageLayoutLinks.map((link) => link.href);

    const parentElement = screen.getByText(/Strona główna/i).parentElement;

    expect(linksHref).toEqual(providedLinksContents);
    expect(parentElement).toHaveClass('flex');
  });
});
