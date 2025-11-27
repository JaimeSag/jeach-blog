import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import EntryCard from "../../components/entry-card";
import { navLinks } from "../../navLinks";
import "./styles.css";

function CategoryFilter({ blogs }) {
  const loc = useLocation();
  const [blogsx, setBlogsx] = useState(blogs);

  useEffect(() => {
    let blop = blogs.filter((blogs) => blogs.category_path === loc.pathname.replace('/', ''));
    if (blop) setBlogsx(blop);
    document.title = `${navLinks.find(element => element.path === loc.pathname).title} Archives`;
  }, [loc, blogs]);

  return (
    <div>
      <div className="container">
        <div className="cards-grid">
          {blogsx.map((element, index) => (
            <EntryCard blog={element} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryFilter;
