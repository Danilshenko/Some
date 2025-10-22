import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import Hero from "../components/Hero/Hero.jsx";
import Header from '../components/Header/Header.jsx'
import SalesBlock from "../components/SalesBlock/SalesBlock.jsx";
import AppBlock from "../components/AppBlock/AppBlock.jsx";
import AboutBlock from "../components/AboutBlock/AboutBlock.jsx";
import CTA from "../components/CTA/Cta.jsx";
import Footer from "../components/Footer/Footer.jsx";
import BrandSection from "../components/BrandSection/BrandSection.tsx";

function App() {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main>
        <Hero />
        <SalesBlock />
        <BrandSection />
        <AppBlock />
        <AboutBlock />
        <CTA />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
