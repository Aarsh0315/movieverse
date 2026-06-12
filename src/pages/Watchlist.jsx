import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Watchlist.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Watchlist() {

  const [watchlist, setWatchlist] = useState(
    JSON.parse(localStorage.getItem("watchlist")) || []
  );

  function removeFromWatchlist(movieId) {

    const updatedWatchlist =
      watchlist.filter(
        (movie) => movie.id !== movieId
      );

    setWatchlist(updatedWatchlist);

    localStorage.setItem(
      "watchlist",
      JSON.stringify(updatedWatchlist)
    );
  }

  return (
    <>
      <Navbar />

      <section className="watchlist-page">

        <h1>My Watchlist</h1>

        {watchlist.length === 0 ? (

          <div className="empty-watchlist">
            No movies in your watchlist yet.
          </div>

        ) : (

          <div className="watchlist-grid">

            {watchlist.map((movie) => (

              <div
                className="watchlist-card"
                key={movie.id}
              >

                <Link
                  to={`/movie/${movie.id}`}
                  className="watchlist-link"
                >

                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />

                  <div className="watchlist-info">

                    <h3>{movie.title}</h3>

                    <p>
                      ⭐ {movie.vote_average?.toFixed(1)}
                    </p>

                  </div>

                </Link>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromWatchlist(movie.id)
                  }
                >
                  Remove
                </button>

              </div>

            ))}

          </div>

        )}

      </section>

      <Footer />
    </>
  );
}

export default Watchlist;