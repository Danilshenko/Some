import '../SpecialOfferCard/specialOfferCard.css';

function SpecialOfferCard({brand, key}){
    console.log("data from query: 2", brand);
    console.log(key);
    return(
            <div className="cards-right">
            <h2 className="cards-text">{brand.title}</h2>
            <p>{brand.text}</p>
            <span className="cards-num">{brand.descount}%</span>
            </div>
    )
}

export default SpecialOfferCard;