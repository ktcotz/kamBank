import { ReactNode } from 'react';
import clsx from 'clsx';

type WrapperProps = {
  children: ReactNode;
  className?: string;
};

export const Wrapper = ({ children, className }: WrapperProps) => {
  const base = 'max-w-7xl mx-auto w-full';
  return <div className={clsx(className, base)}>{children}</div>;
};
