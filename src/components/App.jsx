import Layout from "./Layout/Layout";
import NotFound from "./NotFound/NotFound";
import { HomePage } from "./pages/HomePage";
import { MoviesPage } from "./pages/MoviesPage";
import { Routes, Route} from 'react-router-dom'



export const App = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
    </div>
  );
};
