import {IProductData, Pagination} from "./ProductDataSchema";

export interface IRootState {
  pagination: Pagination,
  products: {
    items: IProductData[];
  },
}

export interface IRootIsLoading {
  products: {
    isLoading: boolean;
  };
}

export interface ProductRootState {
  singleProduct: {
    item: IProductData;
  };
}
export interface IRootIsLoading {
  singleProduct: {
    isLoading: boolean;
  };
}