const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// const BASE_URL = "https://api.themoviedb.org/3";

export async function getTrendingMovies(page = 1) {

  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&page=${page}`
  );

  const data = await response.json();

  return data.results;
}

export async function getMovieDetails(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );

  const data = await response.json();

  return data;

}

export async function getMovieCredits(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
  );

  const data = await response.json();

  return data.cast;
}

export async function searchMovies(query, page = 1) {

  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
  );

  const data = await response.json();

  return data.results;
}


export async function getMoviesByGenre(genreId) {

  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
  );


  const data = await response.json();

  return data.results;
}


export async function getMovieTrailer(id) {

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`
  );

  const data = await response.json();

  return data.results;
}

export async function getRecommendedMovies(id) {

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`
  );

  const data = await response.json();

  return data.results;
}