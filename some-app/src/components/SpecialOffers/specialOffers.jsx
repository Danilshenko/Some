import "../SpecialOffers/specialOffers";
import '../../styles/style.css';

function SpecialOffers() {
    return (
    <>
        <div className="special-offers__name">
        <h2 className="name-top__text">Special offers</h2>
        <h3 className="name-bottom__text">From the best brands</h3>
        </div>
        <div className="special-offers__block">
        <div className="block-cards">
            <div className="cards-left">
            <h2 className="cards-name">Brand name</h2>
            <img
                className="cards-img"
                src="./img/bg/bakcBrand-ezgif.com-jpg-to-webp-converter.webp"
                alt="back brand"
            />
            </div>
            <div className="cards-right">
            <h2 className="cards-text">Brand name</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                pellentesque, est quis sagittis sodales, est tortor commodo
                ligula, sed commodo orci elit non nisl. 
            </p>
            <span className="cards-num">15% </span>
            </div>
        </div>
        <div className="block-cards block-cards--secondblock">
            <div className="cards-right">
            <h2 className="cards-text">Brand name</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                pellentesque, est quis sagittis sodales, est tortor commodo
                ligula, sed commodo orci elit non nisl. 
            </p>
            <span className="cards-num">15% </span>
            </div>
            <div className="cards-left">
            <img
                className="cards-img"
                src="./img/bg/backBrand2-ezgif.com-jpg-to-webp-converter.webp"
                alt="back brand"
            />
            </div>
        </div>
        <div className="block-cards">
            <div className="cards-left">
            <img
                className="cards-img"
                src="./img/bg/backBrand3-ezgif.com-jpg-to-webp-converter.webp"
                alt="back brand"
            />
            </div>
            <div className="cards-right">
            <h2 className="cards-text">Brand name</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                pellentesque, est quis sagittis sodales, est tortor commodo
                ligula, sed commodo orci elit non nisl. 
            </p>
            <span className="cards-num">15% </span>
            </div>
        </div>
        <div className="block-cards block-cards--fourthblock">
            <div className="cards-right">
            <h2 className="cards-text">Brand name</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                pellentesque, est quis sagittis sodales, est tortor commodo
                ligula, sed commodo orci elit non nisl. 
            </p>
            <span className="cards-num">15% </span>
            </div>
            <div className="cards-left">
            <img
                className="cards-img"
                src="./img/bg/backBrand4-ezgif.com-jpg-to-webp-converter.webp"
                alt="back brand"
            />
            </div>
        </div>
        </div>
    </> 
    );
}

export default SpecialOffers;
