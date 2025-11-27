import './styles.css';

function Subscribe() {
  return (
    
    <div className="subscribe container">
      <div className="subscribe-block">
        <h2>Want to receive emails?</h2>
        <p>
          Sign up to get an email every time a new blog is published. Only
          happens once a month!
        </p>
        <form action="">
          <input type="email" placeholder="Enter your email" />
          <input type="submit" value="Subscribe" />
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
