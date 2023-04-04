export interface ProductData {
  article_number: string,
  category: string,
  color: string,
  company:string,
  description: string,
  id: number,
  name: string,
  photo: string,
  price: string | number,
  thickness: string,
}

export interface ProductRootState {
  singleProduct: {
    item: ProductData;
  };
}
export interface IRootIsLoading {
  singleProduct: {
    isLoading: boolean;
  };
}
export interface ProductState {
  item: ProductData;
  isLoading: boolean;
  error: string | null;
}