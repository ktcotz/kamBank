import { rootPageLayoutLinks } from './../ui/layout/Navbar/data/data';
import { Navbar } from '../ui/layout/Navbar/Navbar';
import { Button } from '@./ui';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { GlobalRoutes } from './../ui/shared/types/types';

export const Root = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar>
        <Navbar.Logo />
        <Navbar.List items={rootPageLayoutLinks}>
          <Button asChild size="lg">
            <Link to={GlobalRoutes.Home}>{t('navigation.cta')}</Link>
          </Button>
        </Navbar.List>
      </Navbar>
    </div>
  );
};
