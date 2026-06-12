import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-logo">
          <h2>MovieVerse</h2>

          <p>
            Discover movies, build watchlists,
            and explore your next favorite film.
          </p>
        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Movies</li>
            <li>Collections</li>
            <li>Favorites</li>
          </ul>

        </div>

        <div className="footer-links">

          <h3>Account</h3>

          <ul>
            <li>Login</li>
            <li>Register</li>
            <li>Profile</li>
            <li>Watchlist</li>
          </ul>

        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2025 MovieVerse. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;