import "../styles/Collections.css";
import { Link } from "react-router-dom";

const collections = [
  {
    title: "Marvel",
    image:
      "https://wallpaperaccess.com/full/140057.jpg"
  },
  {
    title: "DC",
    image:
      "https://wallpapercave.com/wp/wp9439144.jpg"
  },
  {
    title: "Action",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/hd/5f51f696241415.5eb2d19f8b3e1.png"
  },
  {
    title: "Thriller",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxhWfD3s8_pVZ8phs_gPRllZtxsXjFiqPZgu7nasQmMDljIwrq3dcJHTNj&s=10"
  },
  {
    title: "Sci-Fi",
    image:
      "https://w0.peakpx.com/wallpaper/46/396/HD-wallpaper-kin-2018-movie-poster-fantasy-science-fiction-action-sci-fi-myles-truitt-jack-reynor.jpg"
  }
];

function Collections() {
  return (
    <section className="collections">

      <div className="collection-header">

        <h2>Collections</h2>

        <Link
          to="/Collections"
          className="view-all-btn"
        >
          View All →
        </Link>
    </div>
      <div className="collection-row">

        {collections.map((item,index)=>(
          <div
            className="collection-card"
            key={index}
          >

            <img
              src={item.image}
              alt={item.title}
            />

            <div className="overlay">
              <h3>{item.title}</h3>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Collections;