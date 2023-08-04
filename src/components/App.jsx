import Layout from './Layout/Layout';
import { HomePage } from './pages/HomePage';
import { MoviesPage } from './pages/MoviesPage';
import { Routes, Route } from 'react-router-dom';
import { MovieDateils } from './MovieDateils/MovieDateils';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:id" element={<MovieDateils />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<MoviesPage />} />
        </Route>
      </Routes>
    </div>
  );
};
