import { Link } from 'react-router-dom';
import { GlobalRoutes } from '../types/types';

export const Logo = () => {
  return (
    <Link to={GlobalRoutes.Home}>
      <img
        src="./images/logo.png"
        alt="Logo"
        width={100}
        height={32}
        className="h-8 w-auto"
      />
    </Link>
  );
};
