import Button from "../elements/Button/button";
import "../SalesBlock/salesBlock.css";

function SalesBlock() {
  return (
    <section className="sales-block">
      <img
        className="sales-block__img"
        src="./img/bg/back2-ezgif.com-jpg-to-webp-converter.webp"
        alt="Sales img"
      />
      <div className="block">
        <div className="block-left">
          <h2 className="left-top__text">Sales</h2>
          <h3 className="left-bottom__text">up to 40%</h3>
        </div>
        <Button variant="block-sales_button">Check Out</Button>
      </div>
    </section>
  );
}

export default SalesBlock;
