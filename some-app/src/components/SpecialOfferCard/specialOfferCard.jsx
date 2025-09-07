import '../SpecialOfferCard/specialOfferCard.css';

function SpecialOfferCard({brand, key, withBrandName, imgSide}){
    console.log("data from query:", brand);
    return(
            <div className="cards-right">
            <h2 className="cards-text">{brand.title}</h2>
            <p>{brand.description}</p>
            <span className="cards-num">{brand.precentage}%</span>
            </div>
    )
}

export default SpecialOfferCard;