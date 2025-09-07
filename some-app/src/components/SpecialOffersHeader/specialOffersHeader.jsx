import '../SpecialOffersHeader/specialOffersHeader.css';

function SpecialOffersHeader({title, description}) {
    return(
        <div className="special-offers__name">
        <h2 className="name-top__text">{title}</h2>
        <h3 className="name-bottom__text">{description}</h3>
        </div>
    )
}
export default SpecialOffersHeader;