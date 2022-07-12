import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import NavBar from "./components/navbar";
import Home from "./pages/home";
import Blog from "./components/blog";
import Banner from "./components/banner";
import { blogItems } from "./data";
import FooterL from "./components/footer";
import CategoryFilter from "./pages/category-filter";
import Subscribe from "./components/subscribe";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Banner />
        <NavBar />
        <Routes>
            <Route index element={<Home blogs={blogItems} />} />
            <Route exact path="noticias" element={<CategoryFilter blogs={blogItems}/>} />
            <Route path="noticias/:id" element={<Blog />} />

            <Route exact path="musica" element={<CategoryFilter blogs={blogItems}/>} />
            <Route path="musica/:id" element={<Blog />} />

            <Route exact path="entretenimiento" element={<CategoryFilter blogs={blogItems}/>} />
            <Route path="entretenimiento/:id" element={<Blog />} />

            <Route exact path="otros" element={<CategoryFilter blogs={blogItems}/>} />
            <Route path="otros/:id" element={<Blog />} />

            <Route exact path="deportes" element={<CategoryFilter blogs={blogItems}/>} />
            <Route path="deportes/:id" element={<Blog />} />

            <Route path="*" element={<Navigate replace to="/" />}></Route>
        </Routes>
        <div className="divider-wrap"></div>
        <Subscribe />
        <div className="divider-wrap"></div>
        <FooterL />
      </BrowserRouter>
    </div>
  );
}

export default App;
