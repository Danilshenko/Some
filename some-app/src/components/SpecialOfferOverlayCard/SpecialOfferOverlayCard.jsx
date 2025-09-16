import "../SpecialOffers/specialOffers.css";

function SpecialOfferOverlayCard({brand}){
    // console.log("data from query: 8", brand);
    if(!brand){
        console.log('Brand:', brand)
    }
    return(
        <div className="cards-left">
            <h2 className="cards-name">{brand.title}</h2>
            <img
                className="cards-img"
                src={brand.imgURL}
                alt={brand.brandName}
            />
        </div>
        
    )
}

export default SpecialOfferOverlayCard