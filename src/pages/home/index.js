import EntryCard from "../../components/entry-card";

function Home() {
  const items = [];
  for (let i = 0; i < 12; i++) items.push(<EntryCard num={i}/>);

  return (
    <div>
      <div className="container">
        <h1>Home</h1>
        <div className="row g-1">{items}</div>
      </div>
    </div>
  );
}

export default Home;
