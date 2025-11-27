import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogItems } from "../../data";
import EntryCard from "../entry-card";
import Template1 from "../template-1";
import "./styles.css";

function Blog() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    let blogToShow = blogItems.find((element) => element.id === id);

    if (blogToShow) {
      let related = blogItems.filter(
        (element) => element.category === blogToShow.category
      );
      setBlog({ ...blogToShow, relates: related });
      document.title = `${blogToShow.title}`;
      window.scrollTo(0, 0);
    } else {
      navigate("/", { replace: true });
    }
  }, [id, navigate]);

  return (
    <div className="grid-container container">
      <main className="blog">
        {blog ? (
          <>
            <div className="span-info">
              <span className="category">{blog.category}</span>
              <span>{blog.date}</span>
            </div>
            <Template1 />
          </>
        ) : null}
      </main>
      <div className="divider-wrap"></div>
      <aside>
        <h2>Related posts</h2>
        <div className="cards-grid">
          {blog
            ? blog.relates
                .filter((element) => element.id !== id)
                .map((element, index) => (
                  <EntryCard blog={element} key={index} />
                ))
                .slice(0, 3)
            : ""}
        </div>
      </aside>
    </div>
  );
}

export default Blog;
