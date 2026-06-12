import Navbar from "../components/Navbar";
import "../styles/Blog.css";

function Blog() {
  return (
    <>
      <Navbar />

      <section className="blog-page">

        <h1>Movie Blogs</h1>

        <p>
          Read movie reviews, industry news, recommendations,
          and behind-the-scenes stories.
        </p>

        <div className="coming-card">
          <h2>📝 Blogs Coming Soon</h2>

          <p>
            We're working on exciting movie articles and content.
          </p>
        </div>

      </section>
    </>
  );
}

export default Blog;