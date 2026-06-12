import { Link } from "react-router-dom";
import "../styles/MovieCard.css";

function MovieCard({ movie }) {
  return (
    <Link
    to={`/movie/${movie.id}`}
    className="movie-card"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt="movie"
      />

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>⭐ {movie.vote_average.toFixed(1)}</p>
      </div>
    </Link>
  );
}

export default MovieCard;