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
import Blog from "./components/blog";
import Banner from "./components/banner";
import { blogItems } from "./data";

function App() {
  return (
    <div className="App">
      <SocialBar />

      <BrowserRouter>
        <Banner />
        <NavBar />
        <Routes>
            <Route index element={<Home blogs={blogItems} />} />

            <Route exact path="noticias" element={<Noticias />} />
            <Route path="noticias/:id" element={<Blog />} />

            <Route path="musica" element={<Musica />} />
            <Route path="musica/:id" element={<Blog />} />

            <Route path="entretenimiento" element={<Entretenimiento />} />
            <Route path="entretenimiento/:id" element={<Blog />} />

            <Route path="otros" element={<Otros />} />
            <Route path="otros/:id" element={<Blog />} />

            <Route path="deportes" element={<Deportes />} />
            <Route path="deportes/:id" element={<Blog />} />

            <Route path="*" element={<Navigate replace to="/" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
