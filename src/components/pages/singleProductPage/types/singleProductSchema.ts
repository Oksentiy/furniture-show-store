export interface ProductData {
  article_number: string,
  category: string,
  colors: Color[],
  company:string,
  description: string,
  id: number,
  name: string,
  photo: string,
  prices: Price[]
  thickness: Thickness[],
}
export type Price = {
  thickness: string,
  price: string
}
type Thickness = {
  size: string
}
type Color = {
  name:string,
  hex:string
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