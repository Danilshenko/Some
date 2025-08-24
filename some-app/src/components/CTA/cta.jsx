import '../CTA/cta.css';
import '../../styles/style.css';


function CTA(){
    return(
        <>
        <img
            className="cta-img"
            src="./img/bg/imgfootre-ezgif.com-jpg-to-webp-converter.webp"
            alt="back CTA"
        />
        <div className="cta-sing">
            <h2 className="cta-top__text">Create your own</h2>
            <h3 className="cta-bottom__text">perfect interior</h3>
            <button className="cta-button">Sign up now</button>
        </div>
        </>
    )
}

export default CTA;