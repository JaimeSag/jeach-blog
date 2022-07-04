import "./App.css";
import EntryCard from "./components/entry-card";
import NavBar from "./components/navbar";

function App() {
  const items = 12;
  return (
    <div className="App">
      <div className="banner">
        <div className="innerText">
          <h1>Name</h1>
          <p>Slogan/date/whatever</p>
        </div>
      </div>
      <NavBar />
      <div className="container">
        <div className="row g-1">
          
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />

        </div>
      </div>
    </div>
  );
}

export default App;
