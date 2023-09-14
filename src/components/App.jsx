import { Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Catalogue from 'pages/Catalogue';
import SavedAdverts from 'pages/SavedAdverts';
import SharedLayout from './SharedLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="adverts" element={<Catalogue />} />
          <Route path="saved-adverts" element={<SavedAdverts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};


//      <Toaster />
