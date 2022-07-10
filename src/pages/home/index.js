import EntryCard from "../../components/entry-card";

function Home({ blogs }) {
  return (
    <div>
      <div className="container">
        <h1>Home</h1>
        <div className="cards-grid">
          {(blogs.map((element, index) => (
            
            <EntryCard blog={element} key={index} />
            
          )))}
        </div>
      </div>
    </div>
  );
}

export default Home;
