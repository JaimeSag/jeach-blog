import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import { Fragment } from "react";
import Banner from "./components/banner";
import Blog from "./components/blog";
import FooterL from "./components/footer";
import NavBar from "./components/navbar";
import Subscribe from "./components/subscribe";
import { blogItems } from "./data";
import { navLinks } from "./navLinks";
import CategoryFilter from "./pages/category-filter";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Banner />
        <Routes>
          <Route index
            element={<Home blogs={blogItems} />}
          />

          {navLinks.map((element, index) => (
            <Fragment key={index}>
              <Route exact
                path={element.path.replace("/", "")}
                element={<CategoryFilter blogs={blogItems} />}
              />
              <Route path={`${element.path.replace("/", "")}/:id`}
                element={<Blog />}
              />
            </Fragment>
          ))}

          <Route path="*"
            element={<Navigate replace
              to="/"
            />}
          >
          </Route>
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
