import { Link, useLocation } from "react-router-dom";
import './styles.css';

function EntryCard({ blog }) {
  const description = blog.description;
  const loc = useLocation().pathname;

  return (
    <div
      className={`entry-card ${
        loc === "/" ? (blog.id === "number-1" ? "breaking" : "") : ""
      }`}
    >
      <div className="img-container">
        <img src={`${blog.banner}`} className="card-img" alt="" />
      </div>
      <div className="body-card">
        <div className="span-info mb-2">
          <span className="category">{blog.category}</span>
          <span>{blog.date}</span>
        </div>
        <h2 className="title">{blog.title}</h2>
        <p className="description">
          {description.length > 50 ? `${description.slice(0, 50)}... ` : ``}
        </p>
        <Link to={`/${blog.category_path}/${blog.id}`} className="link-entry">
          &nbsp;
        </Link>
      </div>
    </div>
  );
}

export default EntryCard;
