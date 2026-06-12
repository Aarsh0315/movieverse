# 🎬 MovieVerse

MovieVerse is a modern movie discovery web application built with React and powered by the TMDB API. Users can explore trending movies, search for films, view detailed movie information, watch trailers, browse genre collections, and create a personal watchlist.

## 🌐 Live Demo

🔗 Live Website: https://movieverse-actgv35np-aarsh-vanjari-s-projects.vercel.app/

## 📸 Preview

MovieVerse provides a clean and responsive user interface for discovering movies across different genres and categories.

## ✨ Features

### 🏠 Home Page
- View trending movies from TMDB
- Infinite movie browsing
- Responsive movie grid

### 🔍 Search Movies
- Search movies by title
- Real-time search results
- Trending search suggestions

### 🎥 Movie Details
- Movie poster and overview
- Ratings and release date
- Genre information
- Cast information
- Watch official trailers on YouTube

### 📚 Collections
- Browse movies by genre
- Action, Comedy, Horror, Sci-Fi, Animation, Fantasy and more
- Dynamic movie collections from TMDB API

### ❤️ Watchlist
- Add movies to watchlist
- Remove movies from watchlist
- Persistent storage using Local Storage

### 📱 Responsive Design
- Mobile friendly layout
- Tablet support
- Desktop optimized experience

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- CSS3
- Vite

### API
- TMDB (The Movie Database) API

### Deployment
- Vercel

---

## 📂 Project Structure

```text
src/
│
├── components/
│   ├── Navbar
│   ├── Hero
│   ├── MovieCard
│   ├── Collections
│   └── Footer
│
├── pages/
│   ├── Home
│   ├── Search
│   ├── Collection
│   ├── MovieDetails
│   ├── Watchlist
│   ├── Blog
│   └── Ai
│
├── services/
│   └── api.js
│
├── styles/
│
└── App.jsx