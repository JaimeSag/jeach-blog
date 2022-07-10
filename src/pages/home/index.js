import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import EntryCard from "../../components/entry-card";

function Home({ blogs }) {
  const loc = useLocation();
  const [blogsx, setBlogsx] = useState(blogs);
  const path = loc.pathname.replace("/", "");

  useEffect(() => {
    if (loc.pathname != '/'){
      let blop = blogs.filter((blogs) => blogs.category === path);
      if (blop) setBlogsx(blop);
    }else{
      setBlogsx(blogs)
    }
  }, [loc, blogs]);

  return (
    <div>
      <div className="container">
        <h1>{path}</h1>
        <div className="cards-grid">
          {blogsx.map((element, index) => (
            <EntryCard blog={element} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
