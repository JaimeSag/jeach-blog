import { useState, useEffect } from "react";
import EntryCard from "../../components/entry-card";
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
