import '../SpecialOfferCard/specialOfferCard.css';

function SpecialOfferCard({brand, key, withBrandName, imgSide}){
    return(
            <div className="cards-right">
            <h2 className="cards-text">{brand.title}</h2>
            <p>{brand.text}</p>
            <span className="cards-num">{brand.descount}%</span>
            </div>
    )
}

// function SpecialOfferCard({ brand, key, imgSide, withBrandName }) {
//   return (
//     <div className={`card ${imgSide}`}>
//       <img src={brand.imgURL} alt={brand.title} />
//       {withBrandName && <h2>{brand.brandName}</h2>}
//       <p>{brand.description}</p>
//       <span>{brand.precentage}</span>
//     </div>
//   );
// }

export default SpecialOfferCard;
