import { useQuery } from "@tanstack/react-query";
import { Brand, useApiBrands } from "../../services/brands.ts";
import SpecialOfferCard from "../SpecialOfferCard/specialOfferCard.jsx";
import SpecialOffersHeader from "../SpecialOffersHeader/specialOffersHeader.jsx";


const BrandSection = ({classNames=""} : {classNames?:string}) => {
  const { getBrands } = useApiBrands();

  const { data, isLoading, error } = useQuery<Brand[]>({
    queryKey: ["brands"],
    queryFn: getBrands,
    refetchOnWindowFocus: false,
  });
  


  // if (isLoading) return <Loader />;

  if (error) {
    return <div>Error loading data</div>
  }
    console.log("data from query 3:", data);
  return (
    <section className={classNames}>
      <SpecialOffersHeader title="Special offers" description="from the best brands" />

      <div className="mt-[100px]">
        {data &&
          data.map((brand, index) => {
            console.log("data from query:", data);
            if (index === 0) {
              return (
                <SpecialOfferCard
                  key={brand.id}
                  brand={brand}
                  // withBrandName
                  // imgSide="none"
                />
              );
            }
            if (index % 2 === 0) {
              return (
                <SpecialOfferCard 
                key={brand.id} 
                brand={brand} 
                // imgSide="left" 
                />
              );
            }

            return (
              <SpecialOfferCard
              key={brand.id} 
              brand={brand} 
              // imgSide="right" 
              />
            );
          })}
      </div>
    </section>
  );
};

export default BrandSection;
