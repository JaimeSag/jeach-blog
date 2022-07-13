import { useState, useEffect } from "react";
import EntryCard from "../../components/entry-card";

function Home({ blogs }) {
  const [blogsx, setBlogsx] = useState(blogs);

  useEffect(() => {
    setBlogsx(blogs)
    document.title = `Blog | News, music, sports...`;
  }, [blogs]);

  return (
    <div>
      <div className="container">
        <div className="grid-hero mt-5">
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
