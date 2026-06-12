import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MovieCard from "../components/MovieCard";
import "../styles/Home.css"
import Footer from "../components/Footer";
import Collections from "../components/Collections";
import { useState, useEffect } from "react";
import { getTrendingMovies } from "../services/api";


function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
  async function fetchMovies() {
    const data = await getTrendingMovies();
    setMovies(data);
  }

  fetchMovies();
}, []);


const [page, setPage] = useState(1);
useEffect(() => {

  async function fetchMovies() {

    const data = await getTrendingMovies();

    setMovies(data);

  }

  fetchMovies();

}, []);


async function loadMore() {

  const nextPage = page + 1;

  const data = await getTrendingMovies(nextPage);

  setMovies(prev => [...prev, ...data]);

  setPage(nextPage);

}
  return (
    <>
      <Navbar />
      
      <Hero />

      <section className="movies-section">
    
    <h2 className="section-title">
        Trending Movies
    </h2>

    <p className="section-subtitle">
        Discover the most popular movies
        trending right now.
    </p>

    <div className="movies-grid">

        {movies.map((movie) => (
            <MovieCard
                key={movie.id}
                movie={movie}
            />
        ))}

    </div>

    <button
  className="view-more-btn"
  onClick={loadMore}
>
  Load More Movies
</button>

    </section>
     

    <Collections />
    <Footer />
    </>
  );
}

export default Home;