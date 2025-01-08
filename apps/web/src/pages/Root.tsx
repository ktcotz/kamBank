import { rootPageLayoutLinks } from './../layout/Navbar/data/data';
import { Navbar } from '../layout/Navbar/Navbar';
import { Button } from '@./ui';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { GlobalRoutes } from './../shared/types/types';
import {
  ButtonAnimated,
  Wrapper,
  LanguageSwitcher,
  InfiniteScrollGallery,
} from './../features/ui';
import { rootScrollGallery } from './../features/ui/InfiniteScrollGallery/data/data';

export const Root = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar>
        <Navbar.Trapper>
          <div className="flex justify-between items-center h-16">
            <Navbar.Logo />
            <Navbar.List items={rootPageLayoutLinks}>
              <LanguageSwitcher />
              <Button asChild size="lg">
                <Link to={GlobalRoutes.Home}>{t('navigation.cta')}</Link>
              </Button>
            </Navbar.List>
            <Navbar.Hamburger />
          </div>
          <Navbar.MobileMenu>
            <Navbar.List items={rootPageLayoutLinks} isMobileMenu={true}>
              <LanguageSwitcher />
              <Button asChild size="lg">
                <Link to={GlobalRoutes.Home}>{t('navigation.cta')}</Link>
              </Button>
            </Navbar.List>
          </Navbar.MobileMenu>
        </Navbar.Trapper>
      </Navbar>
      <Wrapper className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 lg:py-32">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 md:text-4xl lg:text-5xl">
              <span className="block xl:inline">{t('hero.title-start')}</span>{' '}
              <span className="block bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent xl:inline">
                {t('hero.title-end')}
              </span>
            </h1>
            <p className="mt-3 text-sm text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-base lg:text-xl">
              {t('hero.description')}
            </p>
            <div className="flex items-center xs:items-start w-full gap-2 xs:gap-4 mt-5 sm:mt-8 xs:w-3/4 flex-col xs:flex-row">
              <div className="w-full xs:w-fit">
                <ButtonAnimated href={GlobalRoutes.Home}>
                  {t('navigation.cta')}
                </ButtonAnimated>
              </div>

              <div className="w-full">
                <ButtonAnimated href={GlobalRoutes.Home} reverse>
                  {t('navigation.cta')}
                </ButtonAnimated>
              </div>
            </div>
          </div>
          <div className="mt-2 lg:mt-0 flex items-center justify-center">
            <picture>
              <source
                srcSet="./images/hero-mobile.png"
                media="(max-width:768px)"
                width={600}
                height={355}
              />
              <img
                src="./images/hero.png"
                alt={t('hero.alt-image')}
                width={600}
                height={355}
                className="rounded-lg shadow-xl transition-transform duration-600 ease-in-out hover:scale-105"
              />
            </picture>
          </div>
        </div>
      </Wrapper>
      <Wrapper className="px-4 sm:px-6 lg:px-8">
        <InfiniteScrollGallery images={rootScrollGallery} />
      </Wrapper>
    </div>
  );
};
