import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogItems } from "../../data";
import EntryCard from "../entry-card";
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
      window.scrollTo(0,0);
    } else {
      navigate("/", { replace: true });
    }
  }, [id, navigate]);

  return (
    <div className="grid-container container">
      <main className="blog">
        {blog ? (
          <>
            <h1>{blog.title}</h1>
            <div className="span-info">
              <span className="category">{blog.category}</span>
              <span>{blog.date}</span>
            </div>
            <p>{blog.description}</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              nesciunt ullam deleniti et fugit, culpa totam explicabo quod
              quibusdam asperiores tempora reiciendis quisquam quos quam
              adipisci ipsam. Obcaecati rerum tempore voluptas officiis!
              Corrupti quas doloribus voluptatem repellat quaerat debitis error
              dolorum necessitatibus eos veritatis eveniet corporis tempora,
              unde officiis nesciunt pariatur! Aut inventore cupiditate
              veritatis ipsa dolores, saepe modi, dolore commodi repellat ullam
              cum corporis incidunt aliquid dolorum culpa maiores eaque laborum
              fugit aperiam voluptates? Laboriosam praesentium id provident
              aspernatur repudiandae ullam mollitia repellendus officiis numquam
              enim omnis eligendi voluptas fuga, temporibus nihil ut quidem,
              quos quae, velit molestias earum.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              nesciunt ullam deleniti et fugit, culpa totam explicabo quod
              quibusdam asperiores tempora reiciendis quisquam quos quam
              adipisci ipsam. Obcaecati rerum tempore voluptas officiis!
              Corrupti quas doloribus voluptatem repellat quaerat debitis error
              dolorum necessitatibus eos veritatis eveniet corporis tempora,
              unde officiis nesciunt pariatur! Aut inventore cupiditate
              veritatis ipsa dolores, saepe modi, dolore commodi repellat ullam
              cum corporis incidunt aliquid dolorum culpa maiores eaque laborum
              fugit aperiam voluptates? Laboriosam praesentium id provident
              aspernatur repudiandae ullam mollitia repellendus officiis numquam
              enim omnis eligendi voluptas fuga, temporibus nihil ut quidem,
              quos quae, velit molestias earum.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              nesciunt ullam deleniti et fugit, culpa totam explicabo quod
              quibusdam asperiores tempora reiciendis quisquam quos quam
              adipisci ipsam. Obcaecati rerum tempore voluptas officiis!
              Corrupti quas doloribus voluptatem repellat quaerat debitis error
              dolorum necessitatibus eos veritatis eveniet corporis tempora,
              unde officiis nesciunt pariatur! Aut inventore cupiditate
              veritatis ipsa dolores, saepe modi, dolore commodi repellat ullam
              cum corporis incidunt aliquid dolorum culpa maiores eaque laborum
              fugit aperiam voluptates? Laboriosam praesentium id provident
              aspernatur repudiandae ullam mollitia repellendus officiis numquam
              enim omnis eligendi voluptas fuga, temporibus nihil ut quidem,
              quos quae, velit molestias earum.
            </p>
          </>
        ) : null}
      </main>
      <div className="divider-wrap"></div>
      <aside>
        <h2>Related posts</h2>
        <div className="cards-grid">
          {blog
            ? blog.relates.filter(element => element.id !== id).map((element,index) => <EntryCard blog={element} key={index} />).slice(0,3)
            : ""
            }
            {
              
            }
        </div>
      </aside>
    </div>
  );
}

export default Blog;
