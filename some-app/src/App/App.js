import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import Header from "../components/Header/header";
import Hero from "../components/Hero/hero";
import SalesBlock from "../components/SalesBlock/salesBlock";
import AppBlock from "../components/AppBlock/appBlock";
import AboutBlock from "../components/AboutBlock/aboutBlock";
import CTA from "../components/CTA/cta";
import Footer from "../components/Footer/footer";
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
