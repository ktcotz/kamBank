import { Link } from 'react-router-dom';
import { Button } from '@./ui';
import { GlobalRoutes } from '../types/types';
import { ReactNode } from 'react';

type ButtonAnimatedProps = {
  href: GlobalRoutes;
  children: ReactNode;
  reverse?: boolean;
};

export const ButtonAnimated = ({
  href,
  children,
  reverse = false,
}: ButtonAnimatedProps) => {
  return (
    <Button asChild size="big" variant="animation">
      <Link to={href}>
        <span
          className={`shadow text-base font-semibold z-10 rounded-lg flex items-center justify-center absolute inset-0 hover:translate-x-[8px] group-focus-visible:translate-x-[8px] group-focus-visible:-translate-y-[8px] hover:-translate-y-[8px] ${
            reverse
              ? 'text-red-600  border-[3px] border-red-600  hover:text-white group-focus-visible:text-white group-focus-visible:bg-gradient-to-r group-focus-visible:from-red-600 group-focus-visible:to-pink-600 hover:bg-gradient-to-r hover:from-red-600 hover:to-pink-600 focus-visible:from-red-600 focus-visible:to-pink-600'
              : 'text-white bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700'
          } transition-all duration-600 ease-in-out `}
        >
          {children}
        </span>
        <span className="transition duration-600 absolute flex flex-col inset-0 border-[1px] border-transparent bg-gradient-to-r from-red-600 to-pink-600 p-[2px] opacity-0 rounded-xl  group-focus-visible:opacity-100 group-hover:opacity-100">
          <span className="block bg-white grow transition duration-600 rounded-lg w-full"></span>
        </span>
      </Link>
    </Button>
  );
};
