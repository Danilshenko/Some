export interface Brand {
  id: number;
  title: string;
  description: string;
  precentage: string;
  imgURL: string;
}

export function useApiBrands() {
  const getBrands = async (): Promise<Brand[]> => {
    const response = await fetch("../data/offers.json");

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data: Brand[] = await response.json();

    return data;
  };

  return { getBrands };
}

