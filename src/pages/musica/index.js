import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import EntryCard from "../../components/entry-card";
import { blogItems } from "../../data";

function Musica() {
  const loc = useLocation();
  const [blogs, setBlogs] = useState(null);
  const path = loc.pathname.replace("/", "");

  useEffect(() => {
    let blogs = blogItems.filter(
      (blogs) => blogs.category === path
    );
    setBlogs(blogs);
  }, []);

  return (
    <div className="container">
      <h1>Musica</h1>
      <div className="cards-grid">
        {blogs
          ? blogs.map((element, index) => (
              <EntryCard blog={element} key={index} />
          ))
          : null}
      </div>
    </div>
  );
}

export default Musica;
