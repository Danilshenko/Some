import "../SpecialOfferCard/specialOfferCard.css";

function SpecialOfferCard({ brand, type = "default", reverse = "false" }) {
  if (!brand) return null;

  if (type === "overlayCards") {
    return (
      <>
        <div className="special-offers__block">
          <div className="block-cards">
            <div className="cards-left">
              <h2 className="cards-name">{brand.title}</h2>
              <img
                className="cards-img"
                src={brand.imgURL}
                alt={brand.brandName}
              />
            </div>
            <div className="cards-right">
              <h2 className="cards-text">{brand.title}</h2>
              <p>{brand.description}</p>
              <span className="cards-num">{brand.precentage}</span>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (type === "default") {
    return (
      <>
        <div className="special-offers__block">
          <div className={`block-cards ${reverse === "true" ? "reverse" : ""}`}>
            <div className="cards-left">
              <img
                className="cards-img"
                src={brand.imgURL}
                alt={brand.brandName}
              />
            </div>
            <div className="cards-right">
              <h2 className="cards-text">{brand.title}</h2>
              <p>{brand.description}</p>
              <span className="cards-num">{brand.precentage}</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SpecialOfferCard;
