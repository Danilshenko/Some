import "../Footer/footer.css";

function Footer() {
  return (
    <footer>
      <div className="info-block">
        <h2>Contact</h2>
        <a href="#" title="Samo Group">
          Samo Group
        </a>
        <a href="#" title="contact@samo.com">
          contact@samo.com
        </a>
        <a href="#" title="+48 800 300 400">
          +48 800 300 400
        </a>
      </div>
      <img
        className="info-logo"
        src="./img/icons/logo-white-mini.svg"
        alt="logo"
      />
      <div className="info-icons">
        <a className="info-icons__img" href="#" title="facebock">
          <img src="./img/icons/facebock.svg" alt="icons" />
        </a>
        <a className="info-icons__img" href="#" title="linkedin">
          <img src="./img/icons/linkedin.svg" alt="icons" />
        </a>
        <a className="info-icons__img" href="#" title="insta">
          <img src="./img/icons/insta.svg" alt="icons" />
        </a>
        <a className="info-icons__img" href="#" title="youtube">
          <img src="./img/icons/youtube.svg" alt="icons" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
