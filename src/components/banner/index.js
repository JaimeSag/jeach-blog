import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { blogItems } from "../../data";

const initialState = {
  title: "JEACH",
  description: "Slogan"
};

function Banner() {
  const location = useLocation()
  const [blog, setBlog] = useState(initialState);
  const path = location.pathname.replace("/", "");

  useEffect(() => {
    let blog = {};
    if (location.pathname != '/'){
      blog.title = path;
      setBlog(blog);
    }else{
      setBlog(initialState);  
    }
    
  }, [location]);

  return (
    <div className="banner">
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
