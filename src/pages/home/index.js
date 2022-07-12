import { useState, useEffect } from "react";
import EntryCard from "../../components/entry-card";
import Hero from "../../components/hero";
import './styles.css';

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
          {blogsx.map((element, index) => ( index<3 ? <EntryCard blog={element} key={index} /> : ''
          ))}
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
