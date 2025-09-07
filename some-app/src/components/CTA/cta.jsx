import '../CTA/cta.css';

import Button from '../elements/Button/button';


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
            <Button>Sing up now</Button>
        </div>
        </>
    )
}

export default CTA;