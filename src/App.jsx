import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Search  from "./pages/Search";
import Blog from "./pages/Blog"
import Ai from "./pages/Ai"
import MovieDetails from "./pages/MovieDetails"
import Watchlist from "./pages/Watchlist";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/movie/:id"
          element={<MovieDetails />}
        />

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/Collections"
          element={<Collection />}
        />

        <Route
          path="/Search"
          element={<Search />}
        />

        <Route
          path="/Blog"
          element={<Blog />}
        />

        <Route
          path="/Ai"
          element={<Ai />}
        />

        <Route
          path="/watchlist"
          element={<Watchlist />}
        />

        </Routes>

    </BrowserRouter>
  );
}

export default App;