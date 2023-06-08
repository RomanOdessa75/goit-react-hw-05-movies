import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { lazy } from 'react';

const HomePage = lazy(() => import('./components/pages/HomePage'));
const MovieDetails = lazy(() => import('./components/pages/MovieDetails'));
const Movies = lazy(() => import('./components/pages/Movies'));
const NotFound = lazy(() => import('./components/pages/NotFound'));
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

// export default App;
