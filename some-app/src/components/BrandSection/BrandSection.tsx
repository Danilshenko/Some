import { useQuery } from "@tanstack/react-query";
import { Brand, useApiBrands } from "../../services/brands.ts";
import SpecialOfferCard from "../SpecialOfferCard/specialOfferCard.jsx";
import SpecialOfferOverlayCard from "../SpecialOfferOverlayCard/SpecialOfferOverlayCard.jsx";
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
  return (
    <section className={classNames}>
      <SpecialOffersHeader title="Special offers" description="from the best brands" />

      <div className="mt-[100px]">
        {data &&
          data.map((brand, index) => {
            if (index === 0) {
              return (
                <SpecialOfferCard
                  key={brand.id}
                  brand={brand}
                  type="overlayCards"
                  />
              );
            }
            if (index % 2 === 1) {
              return (
                <SpecialOfferCard 
                key={brand.id} 
                brand={brand} 
                type="default"
                reverse="true"
                />
              );
            }
            return (
              <SpecialOfferCard
              key={brand.id} 
              brand={brand} 
              type="default"
              />
            );
          })}
      </div>
    </section>
  );
};

export default BrandSection;
