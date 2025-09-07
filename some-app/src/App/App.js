import Header from '../components/Header/header';
import Hero from '../components/Hero/hero';
import SalesBlock from '../components/SalesBlock/salesBlock';
import SpecialOffers from '../components/SpecialOffers/specialOffers';
import AppBlock from '../components/AppBlock/appBlock';
import AboutBlock from '../components/AboutBlock/aboutBlock';
import CTA from '../components/CTA/cta';
import Footer from '../components/Footer/footer'
import BrandSection from '../components/BrandSection/BrandSection.tsx'

function App() {
  return (
    <>
    <header>
        <Header/>
    </header>
    <main className="main">
      <Hero/>
      <section className="sales-block">
        <SalesBlock/>
      </section>
      <section className="special-offers">
        <SpecialOffers/>
      </section>
      <section className="app-block">
      <AppBlock/>
      </section>
      <section className="about-block">
        <AboutBlock/>
      </section>
      <section className="cta-block">
        <CTA/>
      </section>
    </main>
    <footer>
      <Footer/>
    </footer>
    </>
  );
}

export default App;
