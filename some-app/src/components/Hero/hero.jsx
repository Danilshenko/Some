import '../Hero/hero.css';

function Hero(){
    return(
        <section className="main-img">
        <img className="back" src="./img/bg/backWebp.webp" alt="main img" />
        <div className="main-text">
            <h1 className="main-text__item">All You Need<br />For Your Design</h1>
            <h2 className="main-text__item">at one place</h2>
        </div>
        </section>
    )
}

export default Hero;