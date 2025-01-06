import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './../Navbar';
import { BrowserRouter, Link } from 'react-router-dom';
import { rootPageLayoutLinks } from '../data/data';
import { Button } from '@./ui';
import { GlobalRoutes } from '../../../shared/types/types';
import { I18nextProvider } from 'react-i18next';
import i18n from './../../../../lib/i18n/i18n';

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  title: 'Compound Navbar',
  tags: ['autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
    },
  },
  decorators: [
    (Story) => {
      return (
        <BrowserRouter>
          <I18nextProvider i18n={i18n}>
            <Story />
          </I18nextProvider>
        </BrowserRouter>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const PrimaryNavigation: Story = {
  render: () => {
    return (
      <Navbar>
        <Navbar.Trapper>
          <div className="flex justify-between items-center h-16">
            <Navbar.Logo />
            <Navbar.List items={rootPageLayoutLinks}>
              <Button asChild size="lg">
                <Link to={GlobalRoutes.Home}>Login!</Link>
              </Button>
            </Navbar.List>
            <Navbar.Hamburger />
          </div>
          <Navbar.MobileMenu>
            <Navbar.List items={rootPageLayoutLinks} isMobileMenu={true}>
              <Button asChild size="lg">
                <Link to={GlobalRoutes.Home}>Login!</Link>
              </Button>
            </Navbar.List>
          </Navbar.MobileMenu>
        </Navbar.Trapper>
      </Navbar>
    );
  },
};

export const NavigationWithoutLogo: Story = {
  render: () => {
    return (
      <Navbar>
        <Navbar.Trapper>
          <div className="flex justify-between items-center h-16">
            <Navbar.List items={rootPageLayoutLinks}>
              <Button asChild size="lg">
                <Link to={GlobalRoutes.Home}>Login!</Link>
              </Button>
            </Navbar.List>
            <Navbar.Hamburger />
          </div>
          <Navbar.MobileMenu>
            <Navbar.List items={rootPageLayoutLinks} isMobileMenu={true}>
              <Button asChild size="lg">
                <Link to={GlobalRoutes.Home}>Login!</Link>
              </Button>
            </Navbar.List>
          </Navbar.MobileMenu>
        </Navbar.Trapper>
      </Navbar>
    );
  },
};

export const MobileNavigation: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },

  render: () => {
    return (
      <Navbar>
        <Navbar.Trapper>
          <div className="flex justify-between items-center h-16">
            <Navbar.Logo />
            <Navbar.List items={rootPageLayoutLinks}>
              <Button asChild size="lg">
                <Link to={GlobalRoutes.Home}>Login!</Link>
              </Button>
            </Navbar.List>
            <Navbar.Hamburger />
          </div>
          <Navbar.MobileMenu>
            <Navbar.List items={rootPageLayoutLinks} isMobileMenu={true}>
              <Button asChild size="lg">
                <Link to={GlobalRoutes.Home}>Login!</Link>
              </Button>
            </Navbar.List>
          </Navbar.MobileMenu>
        </Navbar.Trapper>
      </Navbar>
    );
  },
};
