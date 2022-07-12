import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { blogItems } from "../../data";
import  Backaground  from "../../assets/img/Footer.jpg";
import './styles.css';

const initialState = {
  title: "JEACH",
  description: "Slogan",
  banner: Backaground
};

function Banner() {
  const location = useLocation();
  const lastPath = location.pathname.substring(
    location.pathname.lastIndexOf("/") + 1
  );
  const [blog, setBlog] = useState(initialState);

  useEffect(() => {
    let searchBlog = blogItems.find((blog) => blog.id === lastPath);
    searchBlog ? setBlog(searchBlog) : setBlog(initialState);
  }, [location, lastPath]);

  return (
    <div className="banner" style={{backgroundImage: `url(${blog.banner})`}}>
      <div className="innerText">
        {blog ? (
          <>
            <h1>{blog.title}</h1>
            <p>{blog.description}</p>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Banner;
