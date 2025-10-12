import "../AboutBlock/aboutBlock.css";
import Button from "../elements/Button/button";

function AboutBlock() {
  return (
    <section className="about-block">
      <div className="about-block__info">
        <h2 className="info-name">About us</h2>
        <p className="info-text">
          At Samo, we understand the demands of the interior design industry.
          Founded by a team of seasoned designers and logistics experts, our
          mission is to simplify the sourcing process, enabling designers to
          concentrate on their creative endeavors.
          <br />
          <br />
          With a deep appreciation for aesthetic and practicality, we provide
          comprehensive product lists that cater to diverse styles and budgets.
        </p>
        {/* <button className="info-button">Learn more</button> */}
        <Button>Learn more</Button>
      </div>
      <div className="about-block__img">
        <img
          className="img-back"
          src="./img/bg/backLogo-ezgif.com-jpg-to-webp-converter.webp"
          alt="back Img"
        />
        <img
          className="img-logo"
          src="./img/icons/logo-white-mini.svg"
          alt="logo"
        />
      </div>
    </section>
  );
}

export default AboutBlock;
