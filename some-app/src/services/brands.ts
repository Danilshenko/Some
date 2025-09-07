export interface Brand {
  id: number;
  title: string;
  description: string;
  precentage: string;
  imgURL: string;
  withBrandName?: boolean;
}

export function useApiBrands() {
  const getBrands = async (): Promise<Brand[]> => {
    const response = await fetch("./data/offers.json");

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();

    return data;
  };

  return { getBrands };
}

