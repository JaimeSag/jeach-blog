import { Link, useLocation } from "react-router-dom";

function EntryCard({blog}) {
  const description = blog.description;
  const loc = useLocation().pathname;

  return (
      <div className="entry-card">
        <div className="img-container">
          <img
            src={`https://picsum.photos/500?random=${blog.num}`}
            className="card-img"
            alt=""
          />
        </div>

        <div className="body-card">
          <h2 className="title">{blog.title}</h2>
          <p className="description">
            {description.length > 50 ? `${description.slice(0, 50)}... ` : ``}
          </p>
          <Link to={`${loc === '/' ? blog.category : loc}/${blog.id}`} className="link-entry">&nbsp;</Link>
        </div>
      </div>
  );
}

export default EntryCard;
