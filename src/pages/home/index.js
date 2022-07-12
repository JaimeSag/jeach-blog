import { useState, useEffect } from "react";
import EntryCard from "../../components/entry-card";

function Home({ blogs }) {
  const [blogsx, setBlogsx] = useState(blogs);

  useEffect(() => {
    setBlogsx(blogs)
    document.title = `Blog | Noticias, música, entretenimiento y más`;
  }, [blogs]);

  return (
    <div>
      <div className="container">
        <h1>Home</h1>
        <div className="grid-hero">
          {blogsx.slice(0,3).map((element, index) => ( <EntryCard blog={element} key={index} /> ))}
        </div>
        <div className="divider-wrap"></div>
        <div className="cards-grid">
          {blogsx.map((element, index) => (index>2 ? <EntryCard blog={element} key={index} /> : ''
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
