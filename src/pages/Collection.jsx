import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/Collection.css";

import { useState, useEffect } from "react";
import { getMoviesByGenre } from "../services/api";

const genres = [
  {
    title: "Action Movies",
    description: "Explosive action blockbusters.",
    genreId: 28
  },
  {
    title: "Comedy Collection",
    description: "Laugh-out-loud movies.",
    genreId: 35
  },
  {
    title: "Horror Collection",
    description: "Scary movies for horror fans.",
    genreId: 27
  },
  {
    title: "Sci-Fi Collection",
    description: "Mind bending sci-fi movies.",
    genreId: 878
  },
  {
    title: "Animation Favorites",
    description: "Best animated movies.",
    genreId: 16
  },
  {
    title: "Fantasy Worlds",
    description: "Magic and adventure.",
    genreId: 14
  }
];

function Collection() {

  const [collections, setCollections] = useState([]);
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {

    async function fetchCollections() {

      const data = await Promise.all(

        genres.map(async (genre) => {

          const movies = await getMoviesByGenre(
            genre.genreId
          );

          return {
            ...genre,
            movies: movies.slice(0, 4)
          };

        })

      );

      setCollections(data);

    }

    fetchCollections();

  }, []);

  const filteredCollections = collections.filter(
    (collection) => {

      const matchesSearch =
        collection.title
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesFilter =
        activeFilter === "All" ||
        collection.title
          .toLowerCase()
          .includes(activeFilter.toLowerCase());

      return matchesSearch && matchesFilter;

    }
  );

  return (
    <>
      <Navbar />

      <section className="collection-page">

        <div className="collection-heading">

          <h1>Movie Collections</h1>

          <p>
            Explore curated collections of movies
            organized by genre and categories.
          </p>

        </div>

        <div className="collection-search">

          <input
            type="text"
            placeholder="Search collections..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        <div className="collection-filters">

          <button
            onClick={() =>
              setActiveFilter("All")
            }
          >
            All
          </button>

          <button
            onClick={() =>
              setActiveFilter("Action")
            }
          >
            Action
          </button>

          <button
            onClick={() =>
              setActiveFilter("Comedy")
            }
          >
            Comedy
          </button>

          <button
            onClick={() =>
              setActiveFilter("Horror")
            }
          >
            Horror
          </button>

          <button
            onClick={() =>
              setActiveFilter("Sci-Fi")
            }
          >
            Sci-Fi
          </button>

          <button
            onClick={() =>
              setActiveFilter("Animation")
            }
          >
            Animation
          </button>

        </div>

        <div className="collection-grid">

          {filteredCollections.map(
            (collection, index) => (

            <div
              className="collection-item"
              key={index}
            >

              <div className="collection-images">

                {collection.movies?.map(
                  (movie) => (

                  <img
                    key={movie.id}
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />

                ))}

              </div>

              <div className="collection-info">

                <h3>{collection.title}</h3>

                <p>{collection.description}</p>

              </div>

            </div>

          ))}

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Collection;