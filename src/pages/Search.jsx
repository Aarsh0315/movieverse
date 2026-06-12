import Navbar from "../components/Navbar";
import "../styles/Search.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  getTrendingMovies,
  searchMovies
} from "../services/api";

const trendingMovies = [
  "Interstellar",
  "The Godfather",
  "Christopher Nolan",
  "John Wick",
];

function Search() {

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {

    async function fetchMovies() {

      const data = await getTrendingMovies();

      setMovies(data);

    }

    fetchMovies();

  }, []);

  async function handleSearch() {

    setPage(1);

    if (!query.trim()) {

      const data = await getTrendingMovies();

      setMovies(data);

      return;
    }

    const results = await searchMovies(query, 1);

    setMovies(results);

  }

  async function loadMore() {

    const nextPage = page + 1;

    let data;

    if (query.trim()) {

      data = await searchMovies(
        query,
        nextPage
      );

    } else {

      data = await getTrendingMovies(
        nextPage
      );

    }

    setMovies(prev => [
      ...prev,
      ...data
    ]);

    setPage(nextPage);

  }

  return (
    <>
      <Navbar />

      <section className="search-page">

        <h1>Search Movies</h1>

        <p>
          Discover movies, actors, directors and more.
        </p>

        <div className="search-box">

          <input
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) =>
              setQuery(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />

          <button onClick={handleSearch}>
            Search
          </button>

        </div>

        <div className="trending-section">

          <span>Trending:</span>

          {trendingMovies.map((movie, index) => (
            <button
              key={index}
              onClick={() =>
                setQuery(movie)
              }
            >
              {movie}
            </button>
          ))}

        </div>

        <div className="search-results">

          <h2>
            {query
              ? "Search Results"
              : "Popular Movies"}
          </h2>

          <div className="movies-grid">

            {movies.map((movie) => (

              <Link
                to={`/movie/${movie.id}`}
                className="movie-card"
                key={movie.id}
              >

                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />

                <h3>{movie.title}</h3>

              </Link>

            ))}

          </div>

          <button
            className="view-more-btn"
            onClick={loadMore}
          >
            Load More Movies
          </button>

        </div>

      </section>
    </>
  );
}

export default Search;