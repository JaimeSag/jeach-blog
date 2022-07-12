import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { blogItems } from "../../data";
import EntryCard from "../entry-card";
import "./styles.css";

function Blog() {
  const navigate =  useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blogToShow = blogItems.find((element) => element.id === id);
    
    if (blogToShow){
      let related = blogItems.filter((element) => element.category === blogToShow.category);
      setBlog({...blogToShow, 'relates': related});
      document.title = `${blogToShow.title}`; 
    }else{
      navigate("/", { replace: true });
    }
  }, [id]);

  return (
    <div className="grid-container container">
      <main className="blog">
        {blog ? (
          <>
            <h1>{blog.title}</h1>
            <div className="span-info"><span className="category">{blog.category}</span><span>{blog.date}</span></div>
            <p>{blog.description}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit aperiam labore numquam velit consequatur. Quae quam
              est commodi sunt maiores molestias corporis repudiandae
              repellendus corrupti, dolore voluptates nisi facilis, voluptatem
              alias tempora! Sint excepturi quia, sequi natus facere tempore.
            </p>
          </>
        ) : null}
      </main>
      <div className="divider-wrap"></div>
      <aside>
        <h2>Related posts</h2>
        <div className="cards-grid">
          {blog ? (blog.relates.map((element, index) => ( element.id != id ? <EntryCard blog={element} key={index} /> : ''
          ))) : '' }
          </div>
      </aside>
    </div>
  );
}

export default Blog;
