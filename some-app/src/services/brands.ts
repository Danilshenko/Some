export interface Brand {
  id: number;
  title: string;
  brandName: string;
  description: string;
  precentage: string;
  imgURL: string;
}

export function useApiBrands() {
  const getBrands = async (): Promise<Brand[]> => {
    const response = await fetch("data/offers.json");

    // if (response.ok) {
    //   console.log("data from query 4:", response);
    // }

    if (!response.ok) {
      console.log('error', response)
      throw new Error(response.statusText);
    }

    const data = await response.json();
    console.log("data from query 5:", data);
    return data;
  };

  return { getBrands };
}

