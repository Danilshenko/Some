import '../SalesBlock/salesBlock.css';
import '../../styles/style.css';

function SalesBlock(){
    return(
        <section class="sales-block">
            <img
                class="sales-block__img"
                src="./img/bg/back2-ezgif.com-jpg-to-webp-converter.webp"
                alt="Sales img"
            />
            <div class="block">
                <div class="block-left">
                    <h2 class="left-top__text">Sales</h2>
                    <h3 class="left-bottom__text">up to 40%</h3>
                </div>
                <button class="block-button">Check Out</button>
            </div>
        </section>
    )
}

export default SalesBlock;