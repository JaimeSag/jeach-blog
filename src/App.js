import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import NavBar from "./components/navbar";
import SocialBar from "./components/social-bar";
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
            <Route exact path="noticias" element={<Home blogs={blogItems}/>} />
            <Route path="noticias/:id" element={<Blog />} />

            <Route exact path="musica" element={<Home blogs={blogItems}/>} />
            <Route path="musica/:id" element={<Blog />} />

            <Route exact path="entretenimiento" element={<Home blogs={blogItems}/>} />
            <Route path="entretenimiento/:id" element={<Blog />} />

            <Route exact path="otros" element={<Home blogs={blogItems}/>} />
            <Route path="otros/:id" element={<Blog />} />

            <Route exact path="deportes" element={<Home blogs={blogItems}/>} />
            <Route path="deportes/:id" element={<Blog />} />

            <Route path="*" element={<Navigate replace to="/" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
