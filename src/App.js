import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import NavBar from "./components/navbar";
import SocialBar from "./components/social-bar";
import Musica from "./pages/musica";
import Noticias from "./pages/noticias";
import Entretenimiento from "./pages/entretenimiento";
import Otros from "./pages/otros";
import Deportes from "./pages/deportes";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <SocialBar />
      <div className="banner">
        <div className="innerText">
          <h1>NAME</h1>
          <p>Slogan/date/whatever</p>
        </div>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="noticias" element={<Noticias />} />
            <Route path="musica" element={<Musica />} />
            <Route path="entretenimiento" element={<Entretenimiento />} />
            <Route path="otros" element={<Otros />} />
            <Route path="deportes" element={<Deportes />} />
            <Route path="*" element={<Navigate replace to="/" />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
