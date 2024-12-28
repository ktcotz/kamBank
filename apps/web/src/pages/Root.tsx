import { rootPageLayoutLinks } from './../ui/layout/Navbar/data/data';
import { Navbar } from '../ui/layout/Navbar/Navbar';
import { Button } from '@./ui';

export const Root = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar>
        <Navbar.Logo />
        <Navbar.List items={rootPageLayoutLinks}>
          <Button>Zaloguj się</Button>
        </Navbar.List>
      </Navbar>
    </div>
  );
};
