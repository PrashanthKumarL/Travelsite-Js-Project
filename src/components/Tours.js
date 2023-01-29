import { tourList } from "../data";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>

      <div className="section-center featured-center">
        {tourList.map((link) => {
          return (
            <article className="tour-card" key={link.id}>
              <div className="tour-img-container">
                <img src={link.img} className="tour-img" alt={link.title} />
                <p className="tour-date">{link.date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{link.title}</h4>
                </div>
                <p>{link.text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>
                    {link.country}
                  </p>
                  <p>{link.days}</p>
                  <p>{link.price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
