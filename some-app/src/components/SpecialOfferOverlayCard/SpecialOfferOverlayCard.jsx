import "../SpecialOffers/specialOffers.css";

function SpecialOfferOverlayCard({title, img, alt}){
    return(
        <div className="cards-left">
            <h2 className="cards-name">{title}</h2>
            <img
                className="cards-img"
                src={img}
                alt={alt}
            />
        </div>
        
    )
}



export default SpecialOfferOverlayCard