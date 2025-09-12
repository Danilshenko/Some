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
    const response = await fetch("public/data/offers.json");

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();
    console.log('data', data)
    return data;
  };

  return { getBrands };
}

