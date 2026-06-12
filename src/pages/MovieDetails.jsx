import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/MovieDetails.css";

import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  getMovieDetails,
  getMovieCredits,
  getMovieTrailer,
  getRecommendedMovies
} from "../services/api";

function MovieDetails() {

  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [trailer, setTrailer] = useState(null);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {

    async function fetchMovie() {

      const movieData = await getMovieDetails(id);
      setMovie(movieData);

      const castData = await getMovieCredits(id);
      setCast(castData.slice(0, 10));

      const trailerData = await getMovieTrailer(id);

      const officialTrailer = trailerData.find(
        (video) =>
          video.type === "Trailer" &&
          video.site === "YouTube"
      );

      setTrailer(officialTrailer);

      const recommendedData =
        await getRecommendedMovies(id);

      setRecommendedMovies(
        recommendedData.slice(0, 8)
      );

    }

    fetchMovie();

  }, [id]);

  function addToWatchlist() {

    const existing =
      JSON.parse(
        localStorage.getItem("watchlist")
      ) || [];

    const alreadyExists =
      existing.some(
        (item) => item.id === movie.id
      );

    if (alreadyExists) {
      alert("Movie already in watchlist");
      return;
    }

    existing.push(movie);

    localStorage.setItem(
      "watchlist",
      JSON.stringify(existing)
    );

    alert("Added to Watchlist");
  }

  if (!movie) {
    return (
      <>
        <Navbar />

        <h1
          style={{
            color: "white",
            textAlign: "center",
            marginTop: "100px"
          }}
        >
          Loading...
        </h1>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="movie-details">

        <div className="movie-hero">

          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="movie-poster"
          />

          <div className="movie-info">

            <p className="movie-id">
              Movie ID: {id}
            </p>

            <h1>{movie.title}</h1>

            <div className="movie-meta">

              <span>{movie.release_date}</span>

              <span>
                ⭐ {movie.vote_average?.toFixed(1)}
              </span>

              {movie.genres?.map((genre) => (
                <span key={genre.id}>
                  {genre.name}
                </span>
              ))}

            </div>

            <h3>Overview</h3>

            <p>
              {movie.overview}
            </p>

            <div className="movie-actions">

              <button
                className="watchlist-btn"
                onClick={addToWatchlist}
              >
                Add To Watchlist
              </button>

              {trailer && (

                <a
                  href={`https://www.youtube.com/watch?v=${trailer.key}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="trailer-btn"
                >
                  ▶ Watch Trailer
                </a>

              )}

            </div>

          </div>

        </div>

        <section className="cast-section">

          <h2>Cast</h2>

          <div className="cast-grid">

            {cast.map((actor) => (

              <div
                className="cast-card"
                key={actor.id}
              >

                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                      : "https://via.placeholder.com/200"
                  }
                  alt={actor.name}
                />

                <h4>{actor.name}</h4>

              </div>

            ))}

          </div>

        </section>

        <section className="recommended-section">

          <h2>Recommended For You</h2>

          <div className="recommended-grid">

            {recommendedMovies.map((movie) => (

              <Link
                to={`/movie/${movie.id}`}
                className="recommended-card"
                key={movie.id}
              >

                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : "https://via.placeholder.com/300x450"
                  }
                  alt={movie.title}
                />

                <h4>{movie.title}</h4>

              </Link>

            ))}

          </div>

        </section>

      </section>

      <Footer />
    </>
  );
}

export default MovieDetails;