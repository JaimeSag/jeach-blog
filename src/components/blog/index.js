import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogItems } from "../../data";

function Blog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogItems.find((blog) => blog.id === id);
    if (blog) setBlog(blog);
  }, []);

  return (
    <div className="container">
      {blog ? (
        <>
          <h1>{blog.title}</h1>
          <p>{blog.description}</p>
        </>
      ) : null}
    </div>
  );
}

export default Blog;
