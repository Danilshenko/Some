import "../AppBlock/appBlock.css";
import Button from "../elements/Button/button";

function AppBlock() {
  return (
    <section className="app-block">
      <img
        className="app-block__img"
        src="./img/bg/app-ezgif.com-jpg-to-webp-converter.webp"
        alt="Sales img"
      />
      <div className="block-app">
        <div className="block-app__left">
          <h2 className="left-top__text">Try app</h2>
          <h3 className="left-bottom__text">yourself</h3>
        </div>
        <Button variant="block-app__button">Create the project</Button>
      </div>
    </section>
  );
}

export default AppBlock;
