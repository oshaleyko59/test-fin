import { Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
import Catalogue from 'pages/Catalogue';
import Favorites from 'pages/Favorites';
import SharedLayout from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalogue />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};


