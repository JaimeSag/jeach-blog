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
import { navLinks } from "./navLinks";
import { Fragment } from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Banner />
        <Routes>
          <Route index element={<Home blogs={blogItems} />} />

          {navLinks.map((element, index) => (
            <Fragment key={index}>
              <Route exact path={element.path.replace('/', '')} element={<CategoryFilter blogs={blogItems}/>} />
              <Route path={`${element.path.replace('/', '')}/:id`} element={<Blog />} />
            </Fragment>
          ))}

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
