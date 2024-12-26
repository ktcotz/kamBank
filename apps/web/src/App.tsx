import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Root = lazy(async () => {
  const module = await import('./pages/Root.tsx');
  return { default: module.Root };
});

export const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Root />} />
      </Routes>
    </Suspense>
  );
};
