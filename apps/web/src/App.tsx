import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './lib/i18n/i18n';
import { FullScreenLoader } from './features/ui/FullScreenLoader';

const Root = lazy(async () => {
  const module = await import('./pages/Root.tsx');
  return { default: module.Root };
});

export const App = () => {
  return (
    <Suspense fallback={<FullScreenLoader />}>
      <Routes>
        <Route path="/" element={<Root />} />
      </Routes>
    </Suspense>
  );
};
