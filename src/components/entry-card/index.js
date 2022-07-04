function EntryCard() {
  const lorem = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantiumiste repellat vero qui culpa perferendis saepe, quis fugiat adipisciut blanditiis sed eos quibusdam! Veritatis fuga numquam illo aperiamoptio.";
  return (
    <div className=" col-md-6 col-lg-3">
      <div className="entry-card">
        <div className="img-container">
          <img
            src="https://picsum.photos/500?random=``"
            className="card-img"
            alt=""
          />
        </div>

        <div className="body-card">
          <h2 className="title">Entry title</h2>
          <p className="description">
            {lorem.length > 50 ? `${lorem.slice(0, 50)}... ` : ``}
          </p>
          <a href="#" className="link-entry"></a>
        </div>
      </div>
    </div>
  );
}

export default EntryCard;
