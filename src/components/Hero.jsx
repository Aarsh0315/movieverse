import "../styles/Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero-content">

      <div className="hero-text">

        <h1>
          Discover Your Next
          <br />
          <span>Favorite Movie</span>
        </h1>

        <p>
          Search, explore, and find movies you'll love —
          powered by smart search and a massive movie database.
        </p>

      </div>

      <div className="hero-buttons">

        <Link to="/Search" className="search-btn">
          Search Movies
        </Link>

        <Link to="/Ai" className="ai-btn">
          AI Search
        </Link>

      </div>

      <div className="hero-description">

        <p>
          MovieVerse helps you discover the best movies to watch,
          from mind-bending thrillers to action-packed blockbusters.
          Explore curated collections, find movies similar to your
          favorites, and browse by genre, year, and rating.
        </p>

      </div>

    </section>
  );
}

export default Hero;