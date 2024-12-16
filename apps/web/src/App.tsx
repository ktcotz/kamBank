import { Route, Routes } from 'react-router-dom';
import { Root } from './pages/Root';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />} />
    </Routes>
  );
};
